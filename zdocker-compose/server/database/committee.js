const database = require("../config/database");

exports.findAll = () => {
    return database("committee");
}
exports.findById = (id) => {
    return database("committee")
        .where({ id })
        .first();
}
exports.add = (newCommitteeMember) => {
    return database("committee")
        .insert(newCommitteeMember, 'id')
        .then(([{ id }]) => {
            return database("committee")
                .where({ id: id })
                .first();
        });
}

exports.addLog = (newLog) => {
    return database("committee_log")
        .insert(newLog);
}

exports.del = (id) => {
    return database("committee")
        .where({ id })
        .returning('*') //for log
        // .returning('image')
        .del();
}

exports.update = (willBeUpdateData, id) => {
    return database("committee")
        .where({ id })
        .update(willBeUpdateData)
        .then(() => {
            return database("committee")
                .where({ id })
                .first();
        });
}

exports.findAll_IdAndName = () => {
    return database("committee")
        .select("id", "name")
        .orderBy('id', 'desc');
}

module.exports = {
    ...module.exports,
}