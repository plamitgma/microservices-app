const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/users'

mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = mongoURL;

db.users = require("./user.model.js")(mongoose);

module.exports = db;