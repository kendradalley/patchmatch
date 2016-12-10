'use strict';

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const knex = require('../knex');
const humps = require('humps');
const camelizeKeys = humps.camelizeKeys;
const decamelizeKeys = humps.decamelizeKeys;

router.get('/plots', (req, res) => {
  knex('plots')
    .then((rows) => res.send(camelizeKeys(rows)))
    .catch((err) => next(err));
});

router.post('/plots/:gardenId', (req, res, next) => {
    const organic = req.body.organic;
    const height = req.body.height;
    const width = req.body.width;
    const description = req.body.description;
    const numberOfSpots = req.body.numberOfSpots;
  const gardenId = req.params.gardenId;
  const plot = { gardenId, organic, height, width, description, numberOfSpots };

  return knex('plots')
    .insert(decamelizeKeys(plot), '*')
    .then((rows) => {
      const plot = camelizeKeys(rows[0]);

      res.send(plot);
    })
    .catch((err) => next(err));
});

router.delete('/plots/:id', (req, res, next) => {
  const id = req.params.id;

  if (isNaN(id)) { return next(boom.create(404, 'Not Found')); }
  knex('plots')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) { throw boom.create(404, 'Not Found'); }

      plot = row;

      return knex('plots')
        .where('id', id)
        .del();
    })
    .then(() => {
      delete plot.id;
      const deletedUser = camelizeKeys(plot);

      res.send(deletedUser);
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = router;
