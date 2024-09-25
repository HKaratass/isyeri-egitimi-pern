const database = require("../config/database");

exports.findAll = () => {
    return database("events")
        .orderBy('id', 'desc');
}

exports.findById = async (id) => {
    try {
        const founded = await database("events")
            .where('events.id', '=', id)
            .leftJoin('thesis_manuals', 'events.thesis_manual_id', 'thesis_manuals.id')
            .select('events.*', 'thesis_manuals.thesis_manual')
            .first()
        if (!founded)
            return false;
        if (founded.science_committee?.length > 0) {
            const science_committee = await database('committee').whereIn('id', founded.science_committee);
            founded.science_committee = founded.science_committee.map((k,_) => science_committee.find(member => member.id === k));
            // console.log(a);
            // founded.science_committee = science_committee;
        }
        if (founded.regulatory_authority?.length > 0) {
            const regulatory_authority = await database('committee').whereIn('id', founded.regulatory_authority);
            founded.regulatory_authority = founded.regulatory_authority.map((k,_) => regulatory_authority.find(member => member.id === k));
            // founded.regulatory_authority = regulatory_authority;
        }
        if (founded.committee_chairman !== 0) {
            const committee_chairman = await database('committee').where('id', founded.committee_chairman).first();
            founded.committee_chairman = committee_chairman;
        }
        return founded;
    } catch (e) {
        console.log("e", e);
    }
}

exports.findByIdForUpdate = (id) => {
    return database("events")
        .where({ id })
        .first();
}


exports.add = (newEvent) => {
    return database("events")
        .insert(newEvent, 'id')
        .then(([{ id }]) => {
            return database("events")
                .where({ id: id })
                .first();
        });
}
exports.addLog = (newLog) => {
    return database("events_log")
        .insert(newLog);
}
exports.update = (willBeUpdateData, id) => {
    return database("events")
        .where({ id })
        .update(willBeUpdateData)
        .then(() => {
            return database("events")
                .where({ id })
                .first();
        });
}

exports.del = (id) => {
    return database("events")
        .where({ id })
        .returning('*') //for log
        .del();
}

exports.findAll_IdAndTitle = () => {
    return database("events")
        .select("id", "title")
        .orderBy('id', 'desc');

}

exports.findAll_forTable_Limited = () => {
    return database("events")
        .select(
            "id",
            "title",
            "subtitle",
            "start_date",
            "end_date",
            "event_type"
        )
        .where({ onAir: true })
        .limit(20)
        .orderBy('id', 'desc');
}

exports.findAll_forTable = () => {
    return database("events")
        .select(
            "id",
            "title",
            "subtitle",
            "start_date",
            "end_date",
            "event_type"
        )
        .where({ onAir: true })
        .orderBy('id', 'desc');
}

exports.findById_DatesAndTitle = (id) => {
    return database("events")
        .where({ id })
        .select(
            "title",
            "sum_first_day_date",
            "sum_last_day_date",
            "text_first_day_date",
            "text_last_day_date"
        );
}

exports.checkCommitteeMember = (id) => {
    return database('events')
        .where('science_committee', '@>', [id])
        .orWhere('regulatory_authority', '@>', [id])
        .orWhere('committee_chairman', '=', id);
}


module.exports = {
    ...module.exports,
}