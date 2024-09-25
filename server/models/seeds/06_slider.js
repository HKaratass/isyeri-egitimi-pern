/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('slider').del()
  await knex('slider').insert([
    {
      event_id: 23,
      target: "dates",
      queue: 1
    },
    {
      event_id: 23,
      target: "committee",
      queue: 2
    },
    {
      event_id: 23,
      queue: 3
    },
    {
      event_id: 23,
      target: "dates",
      queue: 4
    },
    {
      event_id: 23,
      target: "send_paper",
      queue: 5
    },
    {
      event_id: 23,
      target: "dates",
      onAir: false,
      queue: 6
    },
  ]).then(console.log(" - - - SLIDER: Seed Run Successful - - -"));
};
