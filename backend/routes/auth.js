const express = require('express');
const {
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword,
} = require('../controllers/authcontroller');

const router = express.Router();

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);      
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
module.exports = router;
