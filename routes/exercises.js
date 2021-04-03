const express = require('express');
const { Exercise } = require('../database');
const router = express.Router();

// GET all exercises
router.get('/', async (req, res, next) => {
  res.json(await Exercise.findAll());
});

// GET a single exercise by id
router.get('/:id', async (req, res, next) => {
  const exercise = await Exercise.findByPk(+req.params.id);
  if (!exercise) return res.sendStatus(404);
  res.json(exercise);
});

// POST a new exercise
router.post('/', async (req, res, next) => {
  const { name, completed, description } = req.body;
  res.status(201);
  res.json(await Exercise.create({ name, completed, description }));
});

// DELETE an exercise by id
router.delete('/:id', async (req, res, next) => {
  const exercise = await Exercise.findByPk(+req.params.id);
  if (!exercise) return res.sendStatus(404);
  await exercise.destroy();
  res.sendStatus(204);
});

module.exports = router;
