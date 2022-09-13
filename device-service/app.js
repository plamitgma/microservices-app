var express = require('express');
var path = require('path');
const cors = require("cors");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

const db = require("./models");

var indexRouter = require('./routes/index');
var devicesRouter = require('./routes/devices');

var app = express();


app.use(logger('dev'));

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.json({limit: '30mb'}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/devices', devicesRouter);

db.mongoose
  .connect(db.url, {
    // auth: {
    //   username: "lphan",
    //   password: "12345",
    // },
    authSource: "admin",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
