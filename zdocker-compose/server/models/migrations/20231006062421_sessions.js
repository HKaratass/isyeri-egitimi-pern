exports.up = function (knex) {
    return knex.schema.createTable('sessions', (table) => {
        table.increments(); //bigserial düşünülebilir
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
        table.string('pc_id', 20).unique();//.notNullable()
        table.string('refresh');//.notNullable();
        table.timestamp('exp_date');//.notNullable();
        table.string('os', 50);//.notNullable();
        table.string('agent');//.notNullable(); //50 az geldi
        table.timestamp('login_at').defaultTo(knex.fn.now(3));
        table.timestamp('logout_at');
        table.string('ip', 40);

    }).then(() => {
        console.log('Sessions Table is Created!..');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('sessions').then(() => {
        console.log('Sessions Table has been Dropped!..');
    });
};
