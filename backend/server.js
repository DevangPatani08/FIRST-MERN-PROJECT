// Import workout routes
const workoutRoutes = require('./routes/workout.js');

// Import express
const express = require('express');

// Import mongoose
const mongoose = require('mongoose');

// Express App
const app = express();

// Import dotenv
const dotenv = require('dotenv');
dotenv.config();

// Port number
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.get("/", (req, res) => {
    res.status(200).json({
        msg: `Welcome to our application.`
    });
});

app.use('/api/workouts/', workoutRoutes);

// Connection to DB
mongoose.connect(process.env.MONGO_URL).then(() => {
    // Listen for request on port 4000 
    app.listen(PORT, () => {
        console.log(`Server is up and running at: http://localhost:${PORT}/ & Connected to DB`);
    });
}).catch((err) => {console.log(`Error: ${err}`)});
