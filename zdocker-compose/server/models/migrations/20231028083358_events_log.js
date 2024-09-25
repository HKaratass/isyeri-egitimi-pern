exports.up = function (knex) {
    return knex.schema.createTable('events_log', (table) => {
        table.increments();
        table.integer('user_id').unsigned();
        table.string('user_ip', 40);
        table.integer('changed_event_id').unsigned();
        table.string('conjugate', 22);
        table.string('type', 1);
        table.timestamp('logged_at').defaultTo(knex.fn.now(3));

        table.string('title', 100);
        table.string('subtitle', 200);
        table.enum('event_type', ['0', '1', '2']);
        table.date('start_date');
        table.date('end_date');
        table.date('sum_first_day_date');
        table.date('sum_last_day_date');
        table.date('text_first_day_date');
        table.date('text_last_day_date');
        table.integer('thesis_manual_id').unsigned();
        table.specificType('gallery', 'text ARRAY');
        table.specificType('contents', 'text ARRAY');
        table.specificType('removed_items', 'text ARRAY');
        table.integer('committee_chairman').unsigned();
        table.specificType('science_committee', 'integer ARRAY');
        table.specificType('regulatory_authority', 'integer ARRAY');

        table.specificType('dates', 'text ARRAY');
        table.string('purpose', 2000); //1000ch
        table.string('text', 7000); //5000ch
        table.boolean('onAir').defaultTo(false); //optimizasyon yapılacak
        table.boolean('schedule').defaultTo(false); //optimizasyon yapılacak
    }).then(() => {
        console.log('Events Log Table is Created!..');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('events_log').then(() => {
        console.log('Events Log Table has been Dropped!..');
    });
};
