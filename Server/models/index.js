const dbConfig = require('../config/db.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.series = require('./series');
db.films = require('./films');

module.exports = db;
