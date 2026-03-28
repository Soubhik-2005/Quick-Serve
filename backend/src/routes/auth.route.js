const express = require('express');
const currentUser = require('../middlewares/auth.middleware')
const {signUpUser, signInUser, googleSignUp,googleSignIn, getMe} = require('../controllers/auth.controller');

const authRouter = express.Router();

authRouter.post('/signup', signUpUser);
authRouter.post('/signin', signInUser); 
authRouter.post("/googleSignUp", googleSignUp)
authRouter.post("/googleSignIn",googleSignIn)
authRouter.get("/me",currentUser, getMe);

module.exports = authRouter;