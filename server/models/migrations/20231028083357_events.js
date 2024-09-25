exports.up = function (knex) {
    return knex.schema.createTable('events', (table) => {
        table.increments();
        table.string('title', 100).notNullable();
        table.string('subtitle', 200).notNullable();
        table.enum('event_type', ['0', '1', '2']).defaultTo('0');
        table.date('start_date');
        table.date('end_date');
        table.date('sum_first_day_date');
        table.date('sum_last_day_date');
        table.date('text_first_day_date');
        table.date('text_last_day_date');
        table.integer('thesis_manual_id').unsigned().defaultTo('1');
        table.foreign('thesis_manual_id').references('thesis_manuals.id').onUpdate('CASCADE').onDelete('RESTRICT');
        table.specificType('gallery', 'text ARRAY');
        table.specificType('contents', 'text ARRAY');
        table.integer('committee_chairman').unsigned();
        table.specificType('science_committee', 'integer ARRAY');
        table.specificType('regulatory_authority', 'integer ARRAY');

        table.specificType('dates', 'text ARRAY');
        table.string('purpose', 2000); //1000ch
        table.string('text', 7000); //5000ch
        table.boolean('onAir').defaultTo(false); //optimizasyon yapılacak
        table.boolean('schedule').defaultTo(false); //optimizasyon yapılacak
    }).then(() => {
        console.log('Events Table is Created!..');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('events').then(() => {
        console.log('Events Table has been Dropped!..');
    });
};
