const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const generateToken = require('../utils/generateToken');
const currentUser = require("../middlewares/auth.middleware")

async function signUpUser (req, res) {
    const {name,email, phone, address, password, role} = req.body;

    // validate the data
    if(!name  || !phone || !address || !email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json({message:"User already exists"});
    }

    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            fullName:name,
            email,  
            phone,
            address,
            password:hashedPassword,
            role,
    })

    const token = generateToken(user._id);

    res.cookie('token', token,{
        httpOnly:true,
        secure:false,
        sameSite:"Lax"
    });
    
    res.status(201).json({message:"User registered successfully"});
    }
    catch(error){
        res.status(500).json({message:"Error in registerUser", error});
    }
}

async function signInUser(req,res){
    const {email, password, role} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    try{
        const isUser = await User.findOne({email});
        if(!isUser){
            return res.status(400).json({message:"Invalid credentials"});
        }
        if(isUser.role !== role){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const isMatch = await bcrypt.compare(password, isUser.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const token = generateToken(isUser._id);
        res.cookie('token', token);
        res.status(200).json({message:"User signed in successfully"});
    }
    catch(error){
        res.status(500).json({message:"Error in signInUser", error});
    }
}

async function googleSignUp(req,res){
    try{
    const {name,email,address,phone,role} = req.body;
    const isUser = await User.findOne({email});
    if(isUser) return res.status(400).send({message:"user already exist"});
    const user = await User.create({
        fullName:name,
        email,
        address,
        role,
        phone
    });
    const token = generateToken(user._id);
    res.cookie("token" , token);
    res.status(201).send({message:"user created successfully"});
    }catch(error){
        res.status(400).send({message:"error occurren in googleSignIn"});
    }
}

async function googleSignIn(req,res){
    try{
    const {email,role} = req.body;
    const isUser = await User.findOne({email});
    if(!isUser || isUser.role != role) return res.status(400).send({message:"user is not exist"});

    const token = generateToken(isUser._id);
    res.cookie('token',token);
    res.status(200).json({message:"user logged in successfully"});
}catch(err){
    res.status(400).json({message:"error in googleSignIn"});
}
}

async function getMe(req,res){
    try{
        
        const id = req.userId ;
        const user = await User.findById(id);
        if(!user) return res.status(401).json({message:"user not logged in yet"});
        return res.status(200).send(user);
    }catch(error){
        res.status(401).json({message:"user not found"});
    }
}



module.exports = {signUpUser, signInUser, googleSignUp, googleSignIn,getMe};