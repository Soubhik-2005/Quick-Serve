const mongoose = require('mongoose');

const resturentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    menu:[
        {
        name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
}
    ],
    logo:{
        type:String,
        required:true
    }
});

const Resturent = mongoose.model('Resturent', resturentSchema);

module.exports = Resturent;