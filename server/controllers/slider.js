const Slide = require("../database/slider");
const fs = require('fs');
const fsE = require('fs-extra');
const SLIDER_ROOT = './public/Images/Slider';
const IMAGE_LOG_ROOT = './RemovedLog/Slider';
const { randomBytes } = require("crypto");

exports.getAll = (req, res, next) => {
    Slide.findAll().then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF3A', message: "Slaytları listeleme başarısız." })
    })
}

exports.getOnlyAir = (req, res, next) => {
    Slide.findOnlyAir().then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF3B', message: "Slaytları listeleme başarısız." })
    })
}

function customError(message, name, code) {
    const err = new Error(message);
    err.name = name;
    err.code = code;
    return err;
}
exports.newSlide = async (req, res, next) => {
    try {
        const data = JSON.parse(req.body.data);
        if (!req.file) {
            throw customError("Slayta görsel eklemek zorunludur.", "IMG:NAN", "0xF30")
        } else {
            const oldName = req.file.filename;
            const oldPath = req.file.destination + oldName;
            // const transferPath = SLIDER_ROOT + "/" + oldName;

            const added = await Slide.add({ ...data });
            await Slide.addLog({
                user_id: req.user_id,
                user_ip: req.user_ip,
                changed_slide_id: added.id,
                type: 'C',
                new_onAir: data.onAir
            })

            const newName = `/${added.id}.jpg`;
            const newNamePath = SLIDER_ROOT + newName;

            fsE.moveSync(oldPath, newNamePath, { overwrite: true });

            res.status(201).json({ message: "Slayt başarıyla eklendi." });
        }
    } catch (error) {
        if (error.name === "IMG:NAN") {
            return res.status(400).json({ code: error.code, message: error.message })
        }
        res.status(400).json({ code: '0xF37', message: "Slayt ekleme başarısız." })
    }
}

exports.delSlide = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [deleted] = await Slide.del(id);
        const deletePath = SLIDER_ROOT + "/" + id + ".jpg";
        const log = id + "." + randomBytes(7).toString('hex');
        const logPath = IMAGE_LOG_ROOT + "/" + log + ".jpg";
        fsE.moveSync(deletePath, logPath);
        await Slide.addLog({
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_slide_id: id,
            type: 'D',
            old_event_id: deleted.event_id,
            old_queue: deleted.queue,
            old_target: deleted.target,
            old_onAir: deleted.onAir,
            old_image_hex: log,
        })
        res.status(200).json({ message: "Slayt başarıyla silindi." });
    } catch (error) {
        res.status(400).json({ code: '0xF31', message: "Slayt silme başarısız." })
    }
}

exports.updateSlide = async (req, res, next) => {
    try {
        const { id, ...willBeUpdateData } = req.body;
        const [whatChanged] = Object.keys(willBeUpdateData);
        const willBeUpdated = await Slide.findChangedById(id, whatChanged);
        const updated = await Slide.update(willBeUpdateData, id);
        await Slide.addLog({
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_slide_id: id,
            type: 'P',
            [`old_${whatChanged}`]: willBeUpdated[`${whatChanged}`],
            [`new_${whatChanged}`]: updated[`${whatChanged}`]
        })
        res.status(200).json({ ...updated, message: "Slayt güncelleştirmesi başarılı." });
    } catch (error) {
        console.log(error);
        res.status(400).json({ code: '0xF34', message: "Slayt güncelleştirmesi başarısız." });
    }
}

module.exports = {
    ...module.exports,
};

