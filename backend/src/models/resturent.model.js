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
    }
});

const Resturent = mongoose.model('Resturent', resturentSchema);

module.exports = Resturent;