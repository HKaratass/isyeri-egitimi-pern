const Announcement = require("../database/announcements");
const fs = require('fs');
const fsE = require('fs-extra');
const ANNOUNCEMENT_ROOT = './public/Images/Announcement';
const IMAGE_LOG_ROOT = './RemovedLog/Announcement';
const { randomBytes } = require("crypto");

exports.getAll = (req, res, next) => {
    Announcement.findAll().then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF4A', message: "Duyuruları bulunamadı." })
    })
}

exports.getById = (req, res, next) => {
    const { id } = req.params;
    Announcement.findById(id).then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF42', message: "Duyuru bulunamadı." });
    })
}

exports.getAll_IdAndTitle = (req, res, next) => {
    Announcement.findAll_IdAndTitle().then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF49', message: "Duyuruları listeleme başarısız." })
    })
}

function customError(message, name, code) {
    const err = new Error(message);
    err.name = name;
    err.code = code;
    return err;
}
exports.newAnnouncement = async (req, res, next) => {
    try {
        const data = JSON.parse(req.body.data);
        if (!req.file)
            throw customError("Duyurularda görsel eklemek zorunludur.", "IMG:NAN", "0xF40");

        const oldName = req.file.filename;
        const oldPath = req.file.destination + oldName;
        // const transferPath = ANNOUNCEMENT_ROOT + "/" + oldName;

        const added = await Announcement.add(data);
        await Announcement.addLog({
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_announcement_id: added.id,
            type: 'C'
        })

        const newName = `/${added.id}.jpg`;
        const newNamePath = ANNOUNCEMENT_ROOT + newName;

        fsE.moveSync(oldPath, newNamePath, { overwrite: true });

        res.status(201).json({ message: "Duyuru başarıyla eklendi." });
    } catch (error) {
        if (error.name === "IMG:NAN") {
            return res.status(400).json({ code: error.code, message: error.message })
        }
        res.status(400).json({ code: '0xF47', message: "Duyuru ekleme başarısız." })
    }
}

exports.delAnnouncement = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [deleted] = await Announcement.del(id);
        const deletePath = ANNOUNCEMENT_ROOT + "/" + id + ".jpg";
        const log = id + "." + randomBytes(7).toString('hex');
        const logPath = IMAGE_LOG_ROOT + "/" + log + ".jpg";
        fsE.moveSync(deletePath, logPath);
        await Announcement.addLog({
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_announcement_id: id,
            type: 'D',

            old_event_id: deleted.event_id,
            old_head: deleted.head,
            old_description: deleted.description,
            old_image_hex: log
        })
        // fs.unlinkSync(deletePath);

        res.status(200).json({ message: "Duyuru başarıyla silindi." });

    } catch (error) {
        console.log(error);
        res.status(400).json({ code: '0xF41', message: "Duyuru silme başarısız." })
    }
}

exports.updateAnnouncement = async (req, res, next) => {
    try {
        const data = JSON.parse(req.body.data);
        if (!req.file) {
            const willBeUpdated = await Announcement.findById(data.id);
            const updated = await Announcement.update(data, data.id);
            await Announcement.addLog({
                user_id: req.user_id,
                user_ip: req.user_ip,
                changed_announcement_id: data.id,
                type: 'U',

                old_event_id: willBeUpdated.event_id,
                old_head: willBeUpdated.head,
                old_description: willBeUpdated.description,
                new_event_id: updated.event_id,
                new_head: updated.head,
                new_description: updated.description,
            })
            res.status(200).json({ message: "Duyuru başarıyla güncellendi. (Fotoğraf Değişmedi)" });
        } else {
            const oldName = req.file.filename;
            const oldPath = req.file.destination + oldName;
            // const transferPath = ANNOUNCEMENT_ROOT + "/" + oldName;
            const willBeUpdated = await Announcement.findById(data.id);
            const updated = await Announcement.update(data, data.id);
            const log = data.id + "." + randomBytes(7).toString('hex');
            const logPath = IMAGE_LOG_ROOT + "/" + log + ".jpg";
            await Announcement.addLog({
                user_id: req.user_id,
                user_ip: req.user_ip,
                changed_announcement_id: data.id,
                type: 'U',

                old_event_id: willBeUpdated.event_id,
                old_head: willBeUpdated.head,
                old_description: willBeUpdated.description,
                new_event_id: updated.event_id,
                new_head: updated.head,
                new_description: updated.description,
                old_image_hex: log
            })

            const newName = `/${updated.id}.jpg`;
            const newNamePath = ANNOUNCEMENT_ROOT + newName;
            fsE.moveSync(newNamePath, logPath);
            fsE.moveSync(oldPath, newNamePath);

            // fsE.moveSync(oldPath, newNamePath, { overwrite: true });

            res.status(200).json({ message: "Duyuru başarıyla güncellendi. (Fotoğraf Güncellendi)" });
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ code: '0xF44', message: "Duyuru güncelleme başarısız." });
    }
}

module.exports = {
    ...module.exports,
};