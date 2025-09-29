const express = require('express');
const router = express.Router();
const Workout = require('../models/workoutModel');
const { createWorkout, getAllWorkouts, getWorkoutById, deleteWorkoutById, editWorkoutById } = require('../controllers/workoutController');

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