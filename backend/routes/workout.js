const express = require('express');
const Workout = require('../models/workoutModel');
const { createWorkout, getAllWorkouts, getWorkoutById, deleteWorkoutById, editWorkoutById } = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// Get all workouts
router.get('/', getAllWorkouts);

// Get a workout by ID.
router.get('/:id', getWorkoutById);

// Post/Create a workout.
router.post('/', createWorkout);

// Delete a workout by ID.
router.delete('/:id', deleteWorkoutById);

// Patch/edit a workout by ID
router.patch('/:id', editWorkoutById);

module.exports = router;