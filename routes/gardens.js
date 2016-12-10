'use strict';

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const knex = require('../knex');
const humps = require('humps');
const camelizeKeys = humps.camelizeKeys;

router.get('/gardens', (req, res) => {
    knex('gardens')
    .then((rows) => res.send(camelizeKeys(rows)))
    .catch((err) => next(err));
});

router.post('/gardens/:userId', (req, res, next) => {
    const location = req.body.location;
    const userId = req.params.userId;
    const garden = { userId, location };

    return knex('gardens')
    .insert(decamelizeKeys(garden), '*')
    .then((rows) => {
        const garden = camelizeKeys(rows[0]);

        res.send(garden);
    })
    .catch((err) => next(err));
});

module.exports = router;
