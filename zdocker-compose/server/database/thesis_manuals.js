const database = require("../config/database");

exports.findById = (id) => {
    return database("thesis_manuals")
        .where({ id })
        .first()

}

exports.add = (newThesisManual) => {
    return database("thesis_manuals")
        .insert(newThesisManual, 'id')
        .then(([{ id }]) => {
            return database("thesis_manuals")
                .where({ id: id })
                .first();
        });
}
exports.addLog = (newLog) => {
    return database("thesis_manuals_log")
        .insert(newLog);
        // .insert(newLog, 'id');
        // .then(([{ id }]) => {
        //     return database("thesis_manuals_log")
        //         .where({ id: id })
        //         .first();
        // });
}

exports.update = (willBeUpdateData, id) => {
    return database("thesis_manuals")
        .where({ id })
        .update(willBeUpdateData)
        .then(() => {
            return database("thesis_manuals")
                .where({ id })
                .first();
        });
}

exports.del = (id) => {
    return database("thesis_manuals")
        .where({ id })
        .returning('*') //for log
        .del();
}

exports.findAll_IdAndTitle = () => {
    return database("thesis_manuals")
        .select("id", "indicator")
        .orderBy("id");
}

module.exports = {
    ...module.exports,
}