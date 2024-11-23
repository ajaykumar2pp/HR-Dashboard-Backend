const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { register,login } = require('../controllers/auth.controller')


router.post('/register',
    [
        body('name').notEmpty().withMessage('Username is required'),
        body('email').isEmail().withMessage('Invalid email address'),
        body('password')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long'),
    ],
    register);


router.post('/login',
    [
        body('email').isEmail().withMessage('Invalid email address'),
        body('password').notEmpty().withMessage('Password is required'),
    ],login)


module.exports = router;