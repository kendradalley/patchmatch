/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = (knex) => {
  return knex('plots').del()
    .then(() => {
      return knex('plots').insert([{
        id: 1,
        garden_id:
        organic: false,
        height: 2.5,
        width: 3,
        number_of_spots:,
        description:
      }, {
        id: 2,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 3,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 4,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 5,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 6,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 7,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 8,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 9,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 10,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 11,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 12,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 13,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 14,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 15,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 16,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }, {
        id: 17,
        garden_id:
        organic: false,
        height: 6,
        width: 6,
        number_of_spots:,
        description:
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('plots_id_seq', (SELECT MAX(id) FROM plots));"
      );
    });
};
