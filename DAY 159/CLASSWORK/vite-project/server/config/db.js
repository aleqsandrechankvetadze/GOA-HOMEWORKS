const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB database successfully");
    } catch (err) {
        console.error("Error occurred while connecting to MongoDB database");
        process.exit(1);
    }
};

module.exports = connectDB;
