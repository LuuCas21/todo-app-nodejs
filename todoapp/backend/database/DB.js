const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/todolist');
}

module.exports = connectDB;