var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var User = require('./models/user');
var hbs = require('express-handlebars'); 
var path = require('path'); 
// Invoke isntance of express application
var app = express();

// sets the port
app.set('port', 3000);

// set morgan to log info about requests for dev use
app.use(morgan('dev'));

// Initialize body parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// initialize cookie parser to allow us access to the cookies stored in the browser
app.use(cookieParser());

// initialize express-session to allow us to track the logged in user across sessions
app.use(session({
    key: 'user_sid',
    secret: 'randomcatstuff',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

// handlebars config.

