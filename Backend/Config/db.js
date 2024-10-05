const mongoose = require("mongoose");
require('dotenv').config(); // Ensure you load your environment variables

const connect = async () => {
    try {
        await mongoose.connect(process.env.SERVER, {
            serverSelectionTimeoutMS: 5000 // Adjust the timeout if needed
        });
        console.log("Mongoose connected");
    } catch (error) {
        console.error("Mongoose connection error: ", error);
        process.exit(1); // Exit the application on failure
    }
};

module.exports = connect;
