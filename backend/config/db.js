const dotenv= require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const MONGO = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO);
        console.log(`MangoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports= {connectDB} ;