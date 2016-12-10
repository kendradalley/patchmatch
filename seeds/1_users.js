/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        name: 'JK Rowling',
        email: 'jkrowling@gmail.com',
      }, {
        id: 2,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 3,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 4,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 5,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 6,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 7,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 8,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 9,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 10,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 11,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 12,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 13,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 14,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 15,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 16,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      },
      , {
        id: 17,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 18,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 19,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 20,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 21,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 22,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 23,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 24,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 25,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 26,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 27,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 28,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 29,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 30,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 31,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 32,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 33,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 34,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 35,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 36,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }, {
        id: 37,
        name: 'Timmy Turner',
        email: 'fairlyodd@gmail.com',
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
