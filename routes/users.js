'use strict';

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const knex = require('../knex');
const { camelizeKeys } = require('humps');

router.get('/users', (req, res) => {
  knex('users')
    .then((rows) => res.send(camelizeKeys(rows)))
    .catch((err) => next(err));
});

router.post('/users', (req, res, next) => {
  const { name, emailAddress } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.create(400, 'Email already exists');
      }

      const insertUser = { name, emailAddress };

      return knex('users')
        .insert(decamelizeKeys(insertUser), '*');
    })
    .then((rows) => {
      const user = decamelizeKeys(rows[0]);

      res.send(user);
    })
    .catch((err) => next(err));
});

router.delete('/users/:id', (req, res, next) => {
  const id = req.params.id;

  if (isNaN(id)) { return next(boom.create(404, 'Not Found')); }
  knex('users')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) { throw boom.create(404, 'Not Found'); }

      user = row;

      return knex('users')
        .where('id', id)
        .del();
    })
    .then(() => {
      delete user.id;
      const deletedUser = camelizeKeys(user);

      res.send(deletedUser);
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = router;
