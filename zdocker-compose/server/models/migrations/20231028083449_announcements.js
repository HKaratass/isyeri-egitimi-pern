exports.up = function (knex) {
    return knex.schema.createTable('announcements', (table) => {
        table.increments();
        table.integer('event_id').unsigned();
        // table.string('image_url', 50).notNullable();
        // table.integer('image_id').unsigned().notNullable();
        table.string('head', 50).notNullable();
        table.string('description', 6000).notNullable();
    }).then(() => {
        console.log('Announcements Table is Created!..');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('announcements').then(() => {
        console.log('Announcements Table has been Dropped!..');
    });
};