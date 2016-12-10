/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = (knex) => {
  return knex('gardens').del()
    .then(() => {
      return knex('gardens').insert([{
        id: 1,
        user_id:
        location:
      }, {
        id: 2,
        user_id:
        location:
      }, {
        id: 3,
        user_id:
        location:
      }, {
        id: 4,
        user_id:
        location:
      }, {
        id: 5,
        user_id:
        location:
      }, {
        id: 6,
        user_id:
        location:
      }, {
        id: 7,
        user_id:
        location:
      }, {
        id: 8,
        user_id:
        location:
      }, {
        id: 9,
        user_id:
        location:
      }, {
        id: 10,
        user_id:
        location:
      }, {
        id: 11,
        user_id:
        location:
      }, {
        id: 12,
        user_id:
        location:
      }, {
        id: 13,
        user_id:
        location:
      }, {
        id: 14,
        user_id:
        location:
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('gardens_id_seq', (SELECT MAX(id) FROM gardens));"
      );
    });
};
