'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('gardens', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('users')
    .onDelete('CASCADE').index();
    table.string('location').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('gardens');
};
