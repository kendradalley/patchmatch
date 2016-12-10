'use strict';

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const knex = require('../knex');
const { camelizeKeys } = require('humps');

router.get('/gardens', (req, res) => {
  knex('gardens')
    .then((rows) => res.send(camelizeKeys(rows)))
    .catch((err) => next(err));
});

module.exports = router;
