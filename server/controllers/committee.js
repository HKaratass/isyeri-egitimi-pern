const Committee = require("../database/committee");
const Event = require("../database/events");
const fs = require('fs');
const fsE = require('fs-extra');
const COMMITTEE_ROOT = './public/Images/Committee';
const IMAGE_LOG_ROOT = './RemovedLog/Committee';
const { randomBytes } = require("crypto");

exports.getAll = (req, res, next) => {
    Committee.findAll().then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF1A', message: "Komite üyeleri listeleme başarısız." })
    })
}

exports.getAll_IdAndName = (req, res, next) => {
    Committee.findAll_IdAndName().then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF19', message: "Komite üyeleri listeleme başarısız." })
    })
}

exports.newCommitteeMember = async (req, res, next) => {
    try {
        const data = JSON.parse(req.body.data);
        if (!req.file) {
            const added = await Committee.add(data);
            await Committee.addLog({
                user_id: req.user_id,
                user_ip: req.user_ip,
                changed_committee_id: added.id,
                type: 'C'
            })
            res.status(201).json({ message: "Komite üyesi başarıyla eklendi. (Fotoğrafsız)" });
        } else {
            const oldName = req.file.filename;
            // req.file.destination = oldRoot => ./temp
            const oldPath = req.file.destination + oldName;
            // const transferPath = COMMITTEE_ROOT + "/" + oldName;
            const added = await Committee.add({ ...data, image: true });
            await Committee.addLog({
                user_id: req.user_id,
                user_ip: req.user_ip,
                changed_committee_id: added.id,
                type: 'C',
                new_image: true
            })
            const newName = `/${added.id}.jpg`;
            const newNamePath = COMMITTEE_ROOT + newName;

            fsE.moveSync(oldPath, newNamePath, { overwrite: true });

            res.status(201).json({ message: "Komite üyesi başarıyla eklendi. (Fotoğraflı)" });
        }
    } catch (error) {
        res.status(400).json({ code: '0xF17', message: "Komite üyesi ekleme başarısız." })
    }
}

exports.updateCommitteeMember = async (req, res, next) => {
    try {
        const data = JSON.parse(req.body.data);
        if (!req.file) {
            const log = data.id + "." + randomBytes(7).toString('hex');
            if (data.image === -1) {
                const deletePath = COMMITTEE_ROOT + "/" + data.id + ".jpg"
                const logPath = IMAGE_LOG_ROOT + "/" + log + ".jpg";
                if (fs.existsSync(deletePath)) {
                    fsE.moveSync(deletePath, logPath);
                    // fs.unlinkSync(deletePath);
                }
                data.image = false;
            }
            const willBeUpdated = await Committee.findById(data.id);
            const updated = await Committee.update(data, data.id);
            await Committee.addLog({
                user_id: req.user_id,
                user_ip: req.user_ip,
                changed_committee_id: data.id,
                type: 'U',
                old_name: willBeUpdated.name,
                old_title: willBeUpdated.title,
                old_image: willBeUpdated.image,
                old_image_hex: willBeUpdated.image ? log : null,
                new_name: updated.name,
                new_title: updated.title,
                new_image: updated.image,
            })
            res.status(200).json({ message: "Komite üyesi başarıyla güncellendi." });
        } else {
            const oldName = req.file.filename;
            const oldPath = req.file.destination + oldName;
            // const transferPath = COMMITTEE_ROOT + "/" + oldName;

            const willBeUpdated = await Committee.findById(data.id);
            const updated = await Committee.update({ ...data, image: true }, data.id);
            const log = data.id + "." + randomBytes(7).toString('hex');
            const logPath = IMAGE_LOG_ROOT + "/" + log + ".jpg";
            await Committee.addLog({
                user_id: req.user_id,
                user_ip: req.user_ip,
                changed_committee_id: data.id,
                type: 'U',
                old_name: willBeUpdated.name,
                old_title: willBeUpdated.title,
                old_image: willBeUpdated.image,
                old_image_hex: willBeUpdated.image ? log : null,
                new_name: updated.name,
                new_title: updated.title,
                new_image: updated.image,
            })
            const newName = `/${data.id}.jpg`;
            const newNamePath = COMMITTEE_ROOT + newName;
            if (willBeUpdated.image) {
                fsE.moveSync(newNamePath, logPath);
            }
            fsE.moveSync(oldPath, newNamePath);
            // fsE.moveSync(oldPath, newNamePath, { overwrite: true });

            res.status(200).json({ message: "Komite üyesi başarıyla güncellendi." });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ code: '0xF14', message: "Komite üyesi güncelleme başarısız." });
    }
}

exports.getById = (req, res, next) => {
    const { id } = req.params;
    Committee.findById(id).then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(400).json(e)
    })
}

function customError(message, name, code) {
    const err = new Error(message);
    err.name = name;
    err.code = code;
    return err;
}

exports.deleteCommitteeMember = async (req, res, next) => {
    try {
        const { id } = req.params;
        const isCommitteeMember = await Event.checkCommitteeMember(id);
        console.log("var: ", isCommitteeMember);
        if (isCommitteeMember.length > 0) {
            throw customError("Bu kişi bir komitede yer alıyor. Kişiyi silemezsiniz.", "used", "0xF10")
        } else {
            const [deleted] = await Committee.del(id);
            if (deleted.image) {
                const deletePath = COMMITTEE_ROOT + "/" + id + ".jpg";
                const log = id + "." + randomBytes(7).toString('hex');
                const logPath = IMAGE_LOG_ROOT + "/" + log + ".jpg";
                fsE.moveSync(deletePath, logPath);
                await Committee.addLog({
                    user_id: req.user_id,
                    user_ip: req.user_ip,
                    changed_committee_id: id,
                    type: 'D',
                    old_name: deleted.name,
                    old_title: deleted.title,
                    old_image: deleted.image,
                    old_image_hex: log
                })
                // fs.unlinkSync(deletePath);
            } else {
                await Committee.addLog({
                    user_id: req.user_id,
                    user_ip: req.user_ip,
                    changed_committee_id: id,
                    type: 'D',
                    old_name: deleted.name,
                    old_title: deleted.title,
                    // old_image: deleted.image, //default false
                })
            }
            res.status(200).json({ message: "Komite üyesi başarıyla silindi." });
        }

    } catch (error) {
        if (error.name === "used") {
            return res.status(400).json({ code: error.code, message: error.message })
        }
        res.status(400).json({ code: '0xF11', message: "Komite üyesi silme başarısız." })
    }
}

module.exports = {
    ...module.exports,
};

