const database = require("../config/database");

exports.findAll = () => {
    return database("announcements")
        .orderBy('id', 'desc');
}

exports.findById = (id) => {
    return database("announcements")
        .where({ id })
        .first();
}

exports.add = (newAnnouncement) => {
    return database("announcements")
        .insert(newAnnouncement, 'id')
        .then(([{ id }]) => {
            return database("announcements")
                .where({ id: id })
                .first();
        });
}

exports.addLog = (newLog) => {
    return database("announcements_log")
        .insert(newLog);
}

exports.update = (willBeUpdateData, id) => {
    return database("announcements")
        .where({ id })
        .update(willBeUpdateData)
        .then(() => {
            return database("announcements")
                .where({ id })
                .first();
        });
}

exports.del = (id) => {
    return database("announcements")
        .where({ id })
        .returning('*') //for log
        .del();
}

exports.findAll_IdAndTitle = () => {
    return database("announcements")
        .select("id", "head")
        .orderBy('id', 'desc');
}

module.exports = {
    ...module.exports,
}