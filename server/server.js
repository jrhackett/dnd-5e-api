var express = require('express'),
    exphbs = require('express-handlebars'),
    app = express(),
    port = process.env.PORT || 443,
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    promise = require('bluebird'),
    config = require('./config.js')

mongoose.Promise = promise
mongoose.connect(config.database_url, { useMongoClient: true })

app.use(morgan('dev'))

require('./routes/index')(app)
require('./routes/spells')(app)

var server = app.listen(port)
console.log('The magic happens on port ' + port)

module.exports = app // just for testing
