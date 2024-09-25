exports.up = function (knex) {
    return knex.schema.createTable('committee_log', (table) => {
        table.increments();
        table.integer('user_id').unsigned();
        table.string('user_ip', 40);
        table.integer('changed_committee_id').unsigned();
        // table.string('conjugate', 20);
        table.string('type', 1);
        table.timestamp('logged_at').defaultTo(knex.fn.now(3));

        table.string('old_name', 50);
        table.string('new_name', 50);
        table.string('old_title', 60);
        table.string('new_title', 60);
        table.string('old_image_hex', 24);
        table.boolean('old_image').defaultTo(false);
        table.boolean('new_image').defaultTo(false);
    }).then(() => {
        console.log('Committee Log Table is Created!..');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('committee_log').then(() => {
        console.log('Committee Log Table has been Dropped!..');
    });
};
