const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/devices'

mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = mongoURL;

db.devices = require("./device.model.js")(mongoose);

module.exports = db;