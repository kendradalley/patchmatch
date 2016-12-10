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

module.exports = router;
