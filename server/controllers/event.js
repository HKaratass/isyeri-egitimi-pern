const Events = require("../database/events");
const fs = require('fs');
const fsE = require('fs-extra');
const EVENT_IMAGE_ROOT = './public/Images/Events';
const EVENT_FILE_ROOT = './public/Contents/Events';
const IMAGE_LOG_ROOT = './RemovedLog/Events';
const IMAGE_LOG_UPDATE_ROOT = './RemovedLog/Events/AllUpdatesLog';
const { randomBytes } = require("crypto");
const redis = require('../config/redis');

exports.getAll = (req, res, next) => {
    Events.findAll().then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF2A', message: "Etkinlikleri listeleme başarısız." })
    })
}

exports.getAll_IdAndTitle = (req, res, next) => {
    Events.findAll_IdAndTitle().then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF29', message: "Etkinlikleri listeleme başarısız." })
    })
}

exports.getAll_forTable = (req, res, next) => {
    Events.findAll_forTable().then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF2B', message: "Etkinlikleri listeleme başarısız." })
    })
}
exports.getAll_forTable_Limited = (req, res, next) => {
    Events.findAll_forTable_Limited().then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF2C', message: "Etkinlikleri listeleme başarısız." })
    })
}

//non OnAir ekle
exports.getById = (req, res, next) => {
    const { id } = req.params;
    redis.getJSON(`event:${id}`).then((cacheData) => {
        if (cacheData) {
            return res.status(200).json(cacheData);
        }
        Events.findById(id).then((founded) => {
            if (founded && founded.onAir) {
                redis.putJSON(`event:${id}`, founded, 86400);
                res.status(200).json(founded)
            }
            else
                res.status(404).json({ code: '0xF2E', message: "Etkinlik bulunamadı." })
        }).catch((e) => {
            return res.status(404).json({ code: '0xF22', message: "Etkinlik bulunamadı." });
        })
    }).catch((err) => {
        res.status(404).json({ code: '0xF2F', message: "Etkinlik bulunamadı." });
    })

}
exports.getByIdForUpdate = (req, res, next) => {
    const { id } = req.params;
    Events.findByIdForUpdate(id).then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF23', message: "Etkinlik bulunamadı." });
    })
}

function getFileExtension(fileName) {
    const lastDotIndex = fileName.lastIndexOf('.');
    if (lastDotIndex === -1) {
        return fileName;
    }
    return fileName.slice(lastDotIndex + 1);
}

exports.newEvent = async (req, res, next) => {
    try {
        const { file_titles, image_titles, ...data } = JSON.parse(req.body.data);

        //gallery length
        const gallery = []
        for (let i = 0; i < req.files?.images?.length; i++) {
            const one = { image_id: i, title: image_titles[i] }
            gallery.push(JSON.stringify(one));
        }
        //contents length
        const contents = []
        for (let i = 0; i < req.files?.files?.length; i++) {
            const one = { file_name: `${i}.${getFileExtension(req.files.files[i].filename)}`, title: file_titles[i] }
            contents.push(JSON.stringify(one));
        }
        //schedule define for db
        if (req.files?.schedule)
            data.schedule = true;

        const added = await Events.add({ ...data, gallery, contents });
        await Events.addLog({
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_event_id: added.id,
            type: 'C',
            onAir: added.onAir,
            schedule: added.schedule
        })
        if (!fs.existsSync(EVENT_IMAGE_ROOT + `/${added.id}`)) {
            fs.mkdirSync(EVENT_IMAGE_ROOT + `/${added.id}`);
        }
        if (!fs.existsSync(EVENT_FILE_ROOT + `/${added.id}`)) {
            fs.mkdirSync(EVENT_FILE_ROOT + `/${added.id}`);
        }


        for (let i = 0; i < req.files?.images?.length; i++) {
            const oldRoot = req.files.images[i].destination;
            const oldName = req.files.images[i].filename;
            const oldPath = oldRoot + oldName;
            // const transferPath = EVENT_IMAGE_ROOT + "/" + added.id + "/" + oldName;

            const newName = `${i}.jpg`;
            const newNamePath = EVENT_IMAGE_ROOT + "/" + added.id + "/" + newName;

            fsE.moveSync(oldPath, newNamePath, { overwrite: true });
        }



        for (let i = 0; i < req.files?.files?.length; i++) {
            const oldRoot = req.files.files[i].destination;
            const oldName = req.files.files[i].filename;
            const oldPath = oldRoot + oldName;
            // const transferPath = EVENT_FILE_ROOT + "/" + added.id + "/" + oldName;

            const newName = `${i}.${getFileExtension(oldName)}`;
            const newNamePath = EVENT_FILE_ROOT + "/" + added.id + "/" + newName;

            fsE.moveSync(oldPath, newNamePath, { overwrite: true });
        }

        //schedule
        if (req.files?.schedule) {
            const oldRoot = req.files.schedule[0].destination;
            const oldName = req.files.schedule[0].filename;
            const oldPath = oldRoot + oldName;
            // const transferPath = EVENT_IMAGE_ROOT + "/" + added.id + "/" + oldName;
            const newNamePath = EVENT_IMAGE_ROOT + "/" + added.id + "/schedule.jpg";

            fsE.moveSync(oldPath, newNamePath, { overwrite: true });
        }

        res.status(201).json({ message: "Etkinlik başarıyla eklendi." });
    } catch (error) {
        console.log(error);
        res.status(400).json({ code: '0xF27', message: "Etkinlik ekleme başarısız." })
    }
}

const maxImagesLength = new Set(Array.from({ length: 12 }, (_, i) => i));
function detectMissingImageId(array) {
    const missingNumbers = maxImagesLength;

    array.forEach(function (item) {
        missingNumbers.delete(item.image_id);
    });

    return missingNumbers;
}

//max 10 file -> 8
const maxContentLength = new Set(Array.from({ length: 8 }, (_, i) => `${i}`));
function detectMissingContentId(array) {
    const missingNumbers = maxContentLength;

    array.forEach(function (item) {
        missingNumbers.delete(item.file_name.substring(0, 1));
    });

    return missingNumbers;
}


exports.updateEvent = async (req, res, next) => {
    try {
        const { imageFreeId, fileFreeId, ...data } = JSON.parse(req.body.data);
        const willBeUpdated = await Events.findByIdForUpdate(data.id);
        const { id: temp1, ...willBeUpdatedWithOutId } = willBeUpdated;
        const newGallery = [];
        const newImageId = [];
        const removed_items = [];
        imageFreeId.map((k, i) => {
            //********* */
            const deletedPath = EVENT_IMAGE_ROOT + "/" + data.id + "/" + k + ".jpg";
            const log = "AUL.I." + data.id + "." + k + "." + randomBytes(7).toString('hex');
            const logPath = IMAGE_LOG_UPDATE_ROOT + "/" + log + ".jpg";
            console.log("log", log);
            removed_items.push(log);
            // console.log("rem", removed_items); //debug
            fsE.moveSync(deletedPath, logPath);
            //********* */
        })
        data.gallery.map((k, i) => {
            if (k.image_id >= 0) {
                const { url, ...nonUrl } = k;
                newGallery.push(nonUrl);
            } else {
                if (imageFreeId.length > 0) {
                    console.log("girdi");
                    newGallery.push({ image_id: imageFreeId[0], title: k.title });

                    newImageId.push(imageFreeId[0]);
                    imageFreeId.splice(0, 1);
                } else {
                    //her seferinde kontrol daha iyi bir mekanizma
                    const missingNumbers = detectMissingImageId(newGallery);
                    newImageId.push(Array.from(missingNumbers)[0]);
                    newGallery.push({ image_id: Array.from(missingNumbers)[0], title: k.title });
                }
            }
        })

        // imageFreeId.map((k, i) => {
        //     const deletePath = EVENT_IMAGE_ROOT + "/" + data.id + "/" + k + ".jpg"
        //     // fs.unlinkSync(deletePath);
        //     if (fs.existsSync(deletePath)) {
        //         fs.unlinkSync(deletePath);
        //     }
        // })

        for (let i = 0; i < req.files?.images?.length; i++) {
            const oldRoot = req.files.images[i].destination;
            const oldName = req.files.images[i].filename;
            const oldPath = oldRoot + oldName;
            // const transferPath = EVENT_IMAGE_ROOT + "/" + data.id + "/" + oldName;

            const newName = `${newImageId[i]}.jpg`;
            const newNamePath = EVENT_IMAGE_ROOT + "/" + data.id + "/" + newName;

            fsE.moveSync(oldPath, newNamePath, { overwrite: true });
        }

        fileFreeId.map((k, i) => {
            //********* */
            const fileName = JSON.parse(willBeUpdated.contents[k]).file_name;
            const deletedPath = EVENT_FILE_ROOT + "/" + data.id + "/" + fileName;
            const log = "AUL.C." + data.id + "." + randomBytes(7).toString('hex') + "." + fileName;
            const logPath = IMAGE_LOG_UPDATE_ROOT + "/" + log;
            removed_items.push(log);
            fsE.moveSync(deletedPath, logPath);
            //********* */
        })

        const newContents = [];
        const newContentsId = []
        data.contents.map((k, i) => {
            if (k.file_name) {
                const { url, file, ...nonUrlFile } = k;
                newContents.push(nonUrlFile);
            } else {
                if (fileFreeId.length > 0) {
                    newContents.push({ file_name: fileFreeId[0], title: k.title });

                    newContentsId.push(fileFreeId[0]);
                    fileFreeId.splice(0, 1);
                } else {
                    const missingNumbers = detectMissingContentId(newContents);
                    newContentsId.push(Array.from(missingNumbers)[0]);
                    newContents.push({ file_name: Array.from(missingNumbers)[0], title: k.title });
                }
            }
        })

        const filesLength = req.files?.files?.length;
        for (let i = 0; i < filesLength; i++) {
            const oldRoot = req.files.files[i].destination;
            const oldName = req.files.files[i].filename;
            const oldPath = oldRoot + oldName;
            // const transferPath = EVENT_FILE_ROOT + "/" + data.id + "/" + oldName;

            const newName = `${newContentsId[i]}.${getFileExtension(oldName)}`;
            newContents[newContents.length - filesLength + i] = { ...newContents[newContents.length - filesLength + i], file_name: newName }
            const newNamePath = EVENT_FILE_ROOT + "/" + data.id + "/" + newName;
            fsE.moveSync(oldPath, newNamePath, { overwrite: true });
        }

        if (req.files.schedule) {
            const oldRoot = req.files.schedule[0].destination;
            const oldName = req.files.schedule[0].filename;
            const oldPath = oldRoot + oldName;
            // const transferPath = EVENT_IMAGE_ROOT + "/" + data.id + "/" + oldName;
            const newNamePath = EVENT_IMAGE_ROOT + "/" + data.id + "/schedule.jpg";
            if (willBeUpdated.schedule) {
                const log = "AUL.I." + data.id + ".schedule." + randomBytes(7).toString('hex');
                const logPath = IMAGE_LOG_UPDATE_ROOT + "/" + log + ".jpg";
                removed_items.push(log);
                fsE.moveSync(newNamePath, logPath);
            }
            fsE.moveSync(oldPath, newNamePath, { overwrite: true });
            data.schedule = true;
        }
        if (data.schedule === -1) {
            const deletePath = EVENT_IMAGE_ROOT + "/" + data.id + "/schedule.jpg"
            const log = "AUL.I." + data.id + ".schedule." + randomBytes(7).toString('hex');
            const logPath = IMAGE_LOG_UPDATE_ROOT + "/" + log + ".jpg";
            removed_items.push(log);
            fsE.moveSync(deletePath, logPath);
            // if (fs.existsSync(deletePath)) {
            //     fs.unlinkSync(deletePath);
            // }
            data.schedule = false;
        }

        const conjugate = randomBytes(11).toString('hex');
        console.log(removed_items);
        const updated = await Events.update({ ...data, gallery: newGallery, contents: newContents }, data.id);
        const { id: temp2, ...updatedWithOutId } = updated;
        await Events.addLog({
            ...willBeUpdatedWithOutId,
            removed_items,
            conjugate,
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_event_id: data.id,
            type: 'O',
        })
        await redis.del(`event:${data.id}`);
        await Events.addLog({
            ...updatedWithOutId,
            conjugate,
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_event_id: data.id,
            type: 'N',
        })
        res.status(200).json({ message: "Etkinlik başarıyla güncellendi." });
    } catch (error) {
        console.log(error);
        res.status(400).json({ code: '0xF24', message: "Etkinlik güncelleme başarısız." });
    }
}

exports.delEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [deleted] = await Events.del(id);
        const { id: temp1, ...deletedWithOutId } = deleted;
        await redis.del(`event:${id}`);
        await Events.addLog({
            ...deletedWithOutId,
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_event_id: id,
            type: 'D',
        })
        const deleteImagePath = EVENT_IMAGE_ROOT + "/" + id;
        const deleteFilePath = EVENT_FILE_ROOT + "/" + id;
        logPathFile = IMAGE_LOG_ROOT + "/" + id + "Content";
        logPathImage = IMAGE_LOG_ROOT + "/" + id + "Image";
        fsE.moveSync(deleteFilePath, logPathFile);
        fsE.moveSync(deleteImagePath, logPathImage);
        res.status(200).json({ message: "Etkinlik başarıyla silindi." });
    } catch (error) {
        console.log("e", error)
        res.status(400).json({ code: '0xF21', message: "Etkinlik silme başarısız." })
    }
}


module.exports = {
    ...module.exports,
};

