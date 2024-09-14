const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/mynotebook";

const connectToMongo = async () => {
    
        await mongoose.connect(mongoURI, {});
        console.log("Connected to MongoDB successfully");
    
};

module.exports = connectToMongo;
