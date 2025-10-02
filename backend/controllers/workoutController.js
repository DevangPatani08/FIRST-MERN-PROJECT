const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// GET all workouts
exports.getAllWorkouts = async (req, res) => {
    try {
        const user_id = req.user._id;
        const allWorkouts = await Workout.find({user_id}).sort({ createdAt: -1 });
        res.status(200).json(allWorkouts);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

// GET a single workout
exports.getWorkoutById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: `No such workout found`});
    }

    const workout = await Workout.findById(id);
    res.status(200).json(workout);
};

// POST a new workout
exports.createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;

    // try doc to DB
    try {
        const user_id = req.user._id;
        const newWorkout = await Workout.create({ title, reps, load, user_id });
        res.status(200).json(newWorkout);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE a workout by its ID.
exports.deleteWorkoutById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: `No such workout found!...`});
    }

    const deletedWorkout = await Workout.findOneAndDelete({ _id: id });

    if (!deletedWorkout) {
        res.status(400).json({ error: "No such workout to delete!..." });
    }

    res.status(200).json(deletedWorkout);
};


// PATCH/Update a workout by its ID.
exports.editWorkoutById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: `No such workout found!...`});
    }
    
    const editedWorkout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });

    if (!editedWorkout) {
        return res.status(400).json({error: `No such workout!...`});
    }
    return res.status(200).json(editedWorkout);
};