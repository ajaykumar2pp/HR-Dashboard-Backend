// const config = require('../config/env.config')
const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("✅ Successfully connected to the database");
    }
    catch (err){
        onsole.error("🚨 Database connection error:", err.message);
        process.exit(1);
    }
}


module.exports = { ConnectDB };