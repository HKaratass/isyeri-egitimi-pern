exports.up = function (knex) {
    return knex.schema.createTable('thesis_manuals_log', (table) => {
        table.increments();
        table.integer('user_id').unsigned();
        table.string('user_ip', 40);
        table.integer('changed_thesis_manual_id').unsigned();
        // table.string('conjugate', 20);
        table.string('type', 1);
        table.timestamp('logged_at').defaultTo(knex.fn.now(3));
        
        table.string('old_indicator', 20);
        table.string('new_indicator', 20);
        table.string('old_thesis_manual', 6000);
        table.string('new_thesis_manual', 6000);
    }).then(() => {
        console.log('Thesis Manuals Log Table is Created!..');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('thesis_manuals_log').then(() => {
        console.log('Thesis Manuals Log Table has been Dropped!..');
    });
};
