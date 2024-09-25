exports.up = function (knex) {
    return knex.schema.createTable('slider', (table) => {
        table.increments();
        table.integer('event_id').unsigned();
        table.integer('queue').unsigned().defaultTo(15);
        table.string('target', 15);
        table.boolean('onAir').defaultTo(true);

        // table.specificType('slider', 'text ARRAY');
        /**
         * [
         *  {image: "/Images/Slider/0.jpg", event_id: 1, target: "dates", onAir: false}
         * ]
         */
    }).then(() => {
        console.log('Slider Table is Created!..');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('slider').then(() => {
        console.log('Slider Table has been Dropped!..');
    });
};
