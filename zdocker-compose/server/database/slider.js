const database = require("../config/database");

//admin
exports.findAll = () => {
    return database("slider")
        .orderBy("queue", "asc");
}

exports.findOnlyAir = () => {
    return database("slider")
        .where({ onAir: true })
        .orderBy("queue", "asc");
}

exports.findChangedById = (id, whatChanged) => {
    return database("slider")
        .select(`${whatChanged}`)
        .where({ id })
        .first();
}

exports.add = (newSlide) => {
    return database("slider")
        .insert(newSlide, 'id')
        .then(([{ id }]) => {
            return database("slider")
                .where({ id: id })
                .first();
        });
}

exports.addLog = (newLog) => {
    return database("slider_log")
        .insert(newLog);
}

exports.del = (id) => {
    return database("slider")
        .where({ id })
        .returning('*') //for log
        .del();
}

exports.update = (willBeUpdateData, id) => {
    return database("slider")
        .where({ id })
        .update(willBeUpdateData)
        .then(() => {
            return database("slider")
                .where({ id })
                .first();
        });
}

module.exports = {
    ...module.exports,
}