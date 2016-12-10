'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('plots', (table) => {
    table.increments();
    table.integer('garden_id').references('id').inTable('gardens')
    .onDelete('CASCADE').index();
    table.boolean('organic').notNullable();
    table.integer('height').notNullable();
    table.integer('width').notNullable();
    table.string('description').notNullable();
    table.integer('number_of_spots').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('plots');
};
