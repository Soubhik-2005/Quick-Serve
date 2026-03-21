const express = require('express');

const {signUpUser, signInUser, googleSignUp,googleSignIn} = require('../controllers/auth.controller');

const authRouter = express.Router();

authRouter.post('/signup', signUpUser);
authRouter.post('/signin', signInUser); 
authRouter.post("/googleSignUp", googleSignUp)
authRouter.post("/googleSignIn",googleSignIn)

module.exports = authRouter;