const express = require('express');
const router = express.Router();

// user Controller functions import
const { loginUser, signupUser } = require('../controllers/userController');

// login router
router.post('/login', loginUser);

// register router
router.post('/signup', signupUser);

module.exports = router;