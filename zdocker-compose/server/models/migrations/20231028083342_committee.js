exports.up = function (knex) {
    return knex.schema.createTable('committee', (table) => {
        table.increments();
        table.string('name', 50).notNullable();
        table.string('title', 60).notNullable();
        table.boolean('image').defaultTo(false);
        // table.specificType('events_attended', 'integer ARRAY');
    }).then(() => {
        console.log('Committee Table is Created!..');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('committee').then(() => {
        console.log('Committee Table has been Dropped!..');
    });
};
