const mongoose = require('mongoose');

const { MONGO_URL } = process.env;

exports.connect = async() => {
    try {
        mongoose.connect('mongodb://localhost:27017/blog')
        console.log("Successfully connected to database!");


    } catch (error) {
        console.log("database connection failed. exiting now..");
        process.exit(1);
    }
};