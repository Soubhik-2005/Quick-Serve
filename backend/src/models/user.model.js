const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        select : false // this is for so that the password never fetched at frontend accidentally
    },
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["user","delivery-boy","admin"],
        default:"user",
    },
},{timestamps:true});

const User = mongoose.model('User',userSchema);

module.exports = User;