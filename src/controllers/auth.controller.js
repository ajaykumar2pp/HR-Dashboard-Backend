require('dotenv').config()
const User = require('../models/User')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


// Register POST METHOD
exports.register = async (req, res) => {

    console.log(req.body);

    // Check validation errors from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, password, role } = req.body;

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = await User.create({
            name,
            email: email.toLowerCase(),
            password: hashedPassword
        });

        // Remove the password field before sending the response
        const user = newUser.toObject();
        delete user.password;

        res.status(201).json({ message: 'User registered successfully' });
        console.log(user);

    } catch (err) {
        console.error('Error registering user:', error);
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Login POST METHOD
exports.login = async (req, res) => {
    console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password,user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT
        const token = jwt.sign(
            { userId: user._id, role: user.role },
             process.env.JWT_SECRET,
            { expiresIn: '2h' } // Token valid for 2 hours
        );

        res.json({ message :"User Login Successful",token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}

