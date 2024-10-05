const mongoose = require("mongoose");
require('dotenv').config(); // Ensure you load your environment variables

const connect = async () => {
    try {
        const dbURI = process.env.SERVER; // Get the connection string from the environment variable
        console.log("Connecting to MongoDB at:", dbURI); // Log the URI for debugging
        await mongoose.connect(dbURI,);
        console.log("Mongoose connected");
    } catch (error) {
        console.error("Mongoose connection error: ", error);
        process.exit(1); // Exit the application on failure
    }
};

module.exports = connect;
