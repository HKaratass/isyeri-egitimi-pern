exports.up = function (knex) {
    return knex.schema.createTable('slider_log', (table) => {
        table.increments();
        table.integer('user_id').unsigned();
        table.string('user_ip', 40);
        table.integer('changed_slide_id').unsigned();
        table.string('type', 1);
        table.timestamp('logged_at').defaultTo(knex.fn.now(3));

        table.integer('old_event_id').unsigned();
        table.integer('new_event_id').unsigned();
        table.string('old_image_hex', 24);

        //çok değişebilecek bir veri ve sıralama gereksiz
        //almayı planlamıyorum
        table.integer('old_queue').unsigned();
        table.integer('new_queue').unsigned();
        //bunu sor

        table.string('old_target', 15);
        table.string('new_target', 15);
        table.boolean('old_onAir');
        table.boolean('new_onAir');
    }).then(() => {
        console.log('Slider Log Table is Created!..');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('slider_log').then(() => {
        console.log('Slider Log Table has been Dropped!..');
    });
};
