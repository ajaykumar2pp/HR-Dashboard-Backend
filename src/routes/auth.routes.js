const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { register, login, dashboard } = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/authMiddleware');


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
    ], login)

router.get("/dashboard",authMiddleware, dashboard)


module.exports = router;