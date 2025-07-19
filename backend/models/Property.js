const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: String,
    description: String,
    photos: [String],
    coordinates: {
        x: Number,
        y: Number,
        width: Number,
        height: Number
    },
});

const propertySchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    address: String,
    thumbnail: String,
    propertySize: String,
    floorplanImage: String,
    rooms: [roomSchema], 
});

module.exports = mongoose.model('Property', propertySchema);
    
