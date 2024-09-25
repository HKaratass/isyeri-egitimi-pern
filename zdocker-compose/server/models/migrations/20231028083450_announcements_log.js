exports.up = function (knex) {
    return knex.schema.createTable('announcements_log', (table) => {
        table.increments();
        table.integer('user_id').unsigned();
        table.string('user_ip', 40);
        table.integer('changed_announcement_id').unsigned();
        table.string('type', 1);
        table.timestamp('logged_at').defaultTo(knex.fn.now(3));

        table.integer('old_event_id').unsigned();
        table.integer('new_event_id').unsigned();
        
        table.string('old_image_hex', 24);

        table.string('old_head', 50);
        table.string('new_head', 50);
        table.string('old_description', 6000);
        table.string('new_description', 6000);
    }).then(() => {
        console.log('Announcements Log Table is Created!..');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('announcements_log').then(() => {
        console.log('Announcements Log Table has been Dropped!..');
    });
};