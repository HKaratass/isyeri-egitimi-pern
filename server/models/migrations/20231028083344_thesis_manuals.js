exports.up = function (knex) {
    return knex.schema.createTable('thesis_manuals', (table) => {
        table.increments();
        table.string('indicator', 20).notNullable();
        table.string('thesis_manual', 6000).notNullable();
    }).then(() => {
        console.log('Thesis Manuals Table is Created!..');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('thesis_manuals').then(() => {
        console.log('Thesis Manuals Table has been Dropped!..');
    });
};
