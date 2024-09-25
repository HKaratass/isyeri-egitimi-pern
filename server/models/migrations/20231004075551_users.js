exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments(); //bigserial düşünülebilir
        //15 + 7(delete hex)
        table.string('user_name', 22).notNullable().unique(); //old.maxlength(15)
        table.string('email').notNullable().unique(); //otomatik küçülten e posta sql i yaz !!!
        //18 + 7(delete hex)
        table.string('phone_number', 25).notNullable().unique(); //+999 555 555 55 55 //old.maxlength(20)
        table.string('password').notNullable();
        table.string('first_name', 50).notNullable();
        table.string('last_name', 50).notNullable();
        table.string('whoCreated').notNullable(); 
        table.string('whoLastAuth').notNullable(); 
        table.boolean('isAdmin').defaultTo(false);
        table.boolean('isRemoved').defaultTo(false);
        table.timestamp('created_at').defaultTo(knex.fn.now(3));
        table.timestamp('last_sign_at');
        table.integer('access_rank', 1).unsigned().defaultTo(0);


    }).then(() => {
        console.log('Users Table is Created!..');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users').then(() => {
        console.log('Users Table has been Dropped!..');
    });
};
