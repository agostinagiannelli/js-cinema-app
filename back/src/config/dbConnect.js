const mongoose = require('mongoose');
require('dotenv').config();

const URI = `${process.env.DB_HOST}+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster.jopjgdw.mongodb.net/${process.env.DB}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`

const dbConnect = async () => {
    try {
        await mongoose.connect(URI);
    } catch (error) {
        console.log(`URI error: ${error.message}`);
    }
};

module.exports = dbConnect;