const config = require('../config/env.config')
const mongoose = require('mongoose');

const ConnectDB = () => {
    mongoose.connect(config.DATABASE_URL)
        .then(() => {
            console.log("Connected to Database")
        })
        .catch((err) => {
            console.error("Not Connected to database", err)
        })
}


module.exports = {ConnectDB};