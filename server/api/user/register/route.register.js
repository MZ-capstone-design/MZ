const express = require('express');
const router = express.Router();
const register = require('./controller.register/register')
const path = require('path');
const { body } = require('express-validator');
const validate = require('../../../middleware/validate');


router.post('/createUser',
    validate([
    body('name').isString(),
    body('email').isString(),
    body('password').isString(),
    ]),
    register.createUser
);

module.exports = router
