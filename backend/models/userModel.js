const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// static signup method
userSchema.statics.signup = async function (email, password) {
    const exists = await this.findOne({ email });

    if (!email || !password) {
        throw Error('All fields are mandatory!...');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not a valid email!...');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong!...');
    }

    if (exists) {
        throw Error('Email already exists!...');
    }

    const salt = await bcrypt.genSalt(10); // more number more time it takes
    const hash = await bcrypt.hash(password, 10); // if we use salting then pass a salting number.

    const user = await this.create({ email, password: hash });
    return (user);
};

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });

    if (!email || !password) {
        throw Error('All fields are mandatory!...');
    }

    if (!user) {
        throw Error('Incorrect email try again!...');
    } 
    
    const match = await bcrypt.compare(password, user.password);
    
    if (!match) {
        throw Error('Incorrect password try again!...');
    }

    return (user);
};

module.exports = mongoose.model("User", userSchema);