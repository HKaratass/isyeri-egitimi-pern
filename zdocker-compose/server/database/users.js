const database = require("../config/database");

module.exports = {
    findAll,
    findById,
    findByUserName,
    findByEmail,
    findByPhoneNumber,
    updateById,
    deleteById,
    add,
    addLog,
    update,
    last_sign_at
}

function findAll(user_access_rank) {
    return database("users")
        .select(
            'access_rank',
            'created_at',
            'email',
            'first_name',
            'id',
            'isAdmin',
            'last_name',
            'last_sign_at',
            'phone_number',
            'user_name',
            'whoCreated',
            'whoLastAuth'
        )
        .where('access_rank', '<=', user_access_rank)
        .andWhere({ isRemoved: false })
        .orderBy([
            { column: 'access_rank', order: 'desc' },
            { column: 'id', order: 'asc' }
        ]);
}

//andWhere isRemoved:false added
function findById(id) {
    return database("users").where({ id }).first();
}
function findByUserName(user_name) {
    return database("users").where({ user_name }).andWhere({ isRemoved: false }).first();
}
function findByEmail(email) {
    return database("users").where({ email }).andWhere({ isRemoved: false }).first();
}
function findByPhoneNumber(phone_number) {
    return database("users").where({ phone_number }).andWhere({ isRemoved: false }).first();
}

function update(willBeUpdateData, id) {
    return database("users")
        .where({ id })
        .update(willBeUpdateData)
        .then(() => {
            return database("users")
                .where({ id })
                .first();
        });
}

function add(newUser) {
    return database("users")
        .insert(newUser, "id")
        .then(([id]) => {
            return database("users").where({ id: parseInt(Object.values(id)) }).first();
        });
}

function addLog(newLog) {
    return database("users_log")
        .insert(newLog);
}

function updateById(toUpdateUser, id) {
    return database("users").update(toUpdateUser).where({ id })
        .then((updated) => {
            if (updated) {
                return database("users")
                    .where({ id })
                    .first();
            }
        });
}

function deleteById(id) {
    return database("users").del().where({ id });
}

function last_sign_at(where_at, email, date) {
    return database("users")
        .update({ last_sign_at: date.toISOString() })
        .where({ [where_at]: email });
}