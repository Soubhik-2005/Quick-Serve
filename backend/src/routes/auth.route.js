const express = require('express');

const {signUpUser, signInUser} = require('../controllers/auth.controller');

const authRouter = express.Router();

authRouter.post('/signup', signUpUser);
authRouter.post('/signin', signInUser); 

module.exports = authRouter;