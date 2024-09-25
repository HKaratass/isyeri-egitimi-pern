const database = require("../config/database");
const jwt = require('jsonwebtoken');

exports.add = (newSession) => {
    return database("sessions")
        .insert(newSession, "id")
        .then(([id]) => {
            //where kısmı beni yordu sadece bende sıkıntı veriyor error takibi ile yazdım sorunu çözmem uzun sürdü
            return database("sessions").where({ id: parseInt(Object.values(id)) }).first();
        });
    //eğer error verirse yüksek ihtimal
    //milyarda 1 ihtimal pcid çakışır
}

exports.verify = (refresh) => {
    return database("sessions").where({ refresh }).first();
}

exports.refresh = (user_id, old_token, new_token) => {
    return database("sessions")
        .update({ refresh: new_token })
        .where({ user_id })
        .andWhere({ refresh: old_token })
        .then((updated) => {
            if (updated) {
                //update new token ve payload döndürecek
                //bu saçmalık düzeltilmeli
                //göndermesine gerek yok artık direk eldeki verilerden halledildi
                //ama user id göre seçim yapıp sonrasında first olanı göndermek saçmalık
                //direk true döndürsün

                // console.log(database("sessions").where({ user_id }).first());
                // return database("sessions").where({ user_id }).first();
                return true;
                //tamamdır test edildi
            }
        });
}

exports.remove = (refresh_token) => {
    console.log("jwt", refresh_token);
    const refresh_token_data = jwt.decode(refresh_token, process.env.JWT_SECRET_REFRESH);
    console.log("refresh_token_data", refresh_token_data);
    console.log("id", refresh_token_data.id);

    return database("sessions")
        // .del()
        .update({
            logout_at: new Date().toISOString(),
            refresh: "DESTROYED"
        })
        .where({ user_id: refresh_token_data.id })
        .andWhere({ refresh: refresh_token })
        .then(() => {
            return true;
        }).catch((err) => {
            console.log("Session Remove: ", err);
            return false;
        })
}

exports.removeAll = (user_id) => {
    return database("sessions")
        .update({
            logout_at: new Date().toISOString(),
            refresh: "DESTROYED"
        })
        .where({ user_id });
}

exports.removeAllWithOutCurrentPC = (user_id, pc_id) => {
    return database("sessions")
        .whereNot({ pc_id })
        .andWhere({ user_id })
        .update({
            logout_at: new Date().toISOString(),
            refresh: "DESTROYED"
        });
}

module.exports = {
    ...module.exports,
}