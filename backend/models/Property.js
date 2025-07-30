const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    id: String,
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
    price: String,
    address: String,
    image: String,
    bedrooms: Number,
    bathrooms: Number,
    size: String,
    floorplanImage: String,
    features: [String],
    rooms: [roomSchema], 
});

module.exports = mongoose.model('Property', propertySchema);
    
