const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const url = process.env.DATABASE_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

module.exports = db;
