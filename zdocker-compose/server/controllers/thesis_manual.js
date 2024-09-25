const ThesisManual = require("../database/thesis_manuals");

exports.getById = (req, res, next) => {
    const { id } = req.params;
    ThesisManual.findById(id).then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF02', message: "Yazım kuralı bulunamadı." });
    })
}

exports.getAll_IdAndTitle = (req, res, next) => {
    ThesisManual.findAll_IdAndTitle().then((founded) => {
        res.status(200).json(founded)
    }).catch((e) => {
        res.status(404).json({ code: '0xF09', message: "Yazım kuralı listeleme başarısız." })
    })
}

// from authorization + req.user_id
exports.newThesisManual = async (req, res, next) => {
    try {
        const data = req.body;
        const added = await ThesisManual.add(data);
        await ThesisManual.addLog({
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_thesis_manual_id: added.id,
            type: 'C'
        })
        res.status(201).json({ message: "Yazım kuralı başarıyla eklendi." });
    } catch (error) {
        res.status(400).json({ code: '0xF07', message: "Yazım kuralı ekleme başarısız." })
    }
}

exports.updateThesisManual = async (req, res, next) => {
    try {
        const data = req.body;
        const { id, ...willBeUpdateData } = data;
        const willBeUpdated = await ThesisManual.findById(id);
        const updated = await ThesisManual.update(willBeUpdateData, id);
        await ThesisManual.addLog({
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_thesis_manual_id: id,
            type: 'U',
            old_indicator: willBeUpdated.indicator,
            old_thesis_manual: willBeUpdated.thesis_manual,
            new_indicator: updated.indicator,
            new_thesis_manual: updated.thesis_manual,
        })
        res.status(200).json({ message: "Yazım kuralı başarıyla güncellendi." })
    } catch (error) {
        res.status(400).json({ code: '0xF04', message: "Yazım kuralı güncelleme başarısız." });
    }
}

exports.delThesisManual = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [deleted] = await ThesisManual.del(id);
        await ThesisManual.addLog({
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_thesis_manual_id: id,
            type: 'D',
            old_indicator: deleted.indicator,
            old_thesis_manual: deleted.thesis_manual
        })
        res.status(200).json({ message: "Yazım kuralı başarıyla silindi." });
    } catch (error) {
        if (error.code === '23503')
            return res.status(400).json({ code: '0xF01:23503', message: "Yazım kuralı silme başarısız. - Bir etkinlik tarafından kullanılıyor." })
        res.status(400).json({ code: '0xF01', message: "Yazım kuralı silme başarısız." })
    }
}

module.exports = {
    ...module.exports,
};