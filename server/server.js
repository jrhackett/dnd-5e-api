var express = require('express'),
    session = require('express-session'),
    app = express(),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    promise = require('bluebird'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    auth = require('./auth.js'),
    config = require('./config.js'),
    port = config.port

mongoose.Promise = promise
mongoose.connect(config.database_url, { useMongoClient: true })

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: config.session_secret,
  resave: true,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

require('./routes/spells')(app, auth)
require('./routes/users')(app, auth)

var server = app.listen(port)
console.log('The magic happens on port ' + port)

module.exports = app // just for testing
