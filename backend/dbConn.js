const mongoose = require('mongoose');
const mongoUrl = process.env.MONGODB_URI || 'mongodb://admin:password@mongodb:27017/freshdb?authSource=admin';

async function connectDB() {
    try {
        await mongoose.connect(mongoUrl);
        console.log('MongoDB connected successfully!');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
}

function disconnect() {
    mongoose.connection.close(() => {
        console.log('MongoDB connection closed');
    });
}

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + mongoUrl);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
    });
});

connectDB();

module.exports = dbConnection