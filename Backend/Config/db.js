require('dotenv').config(); 
const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.SERVER, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongoose connected");
    } catch (error) {
        console.error("Mongoose connection error: ", error);
        process.exit(1); 
    }
};

module.exports = connect;
