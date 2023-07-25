const express = require('express')
const AuthController = require('../controllers/AuthController.js')
const router = express.Router()
const loginLimiter = require('../loginLimiter/index')

router
    .post('/login', loginLimiter, AuthController.login)
    .post('/verify', AuthController.verify)

module.exports = router
