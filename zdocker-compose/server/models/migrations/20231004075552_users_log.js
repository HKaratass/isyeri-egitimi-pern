exports.up = function (knex) {
    return knex.schema.createTable('users_log', (table) => {
        table.increments(); //bigserial düşünülebilir
        table.integer('user_id').unsigned();
        table.string('user_ip', 40);
        table.integer('changed_user_id').unsigned();
        table.string('type', 1);
        table.timestamp('logged_at').defaultTo(knex.fn.now(3));

        table.boolean('isChangedPassword');
        table.integer('old_access_rank', 1).unsigned();
        table.integer('new_access_rank', 1).unsigned();
    }).then(() => {
        console.log('Users Log Table is Created!..');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users_log').then(() => {
        console.log('Users Log Table has been Dropped!..');
    });
};
