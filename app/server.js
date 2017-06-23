var express = require('express'),
    exphbs = require('express-handlebars'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    promise = require('bluebird'),
    config = require('./config.js')

mongoose.Promise = promise
mongoose.connect(config.database_url)

app.use(morgan('dev'))
app.use(express.static(__dirname))

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

require('./routes/index')(app)
require('./routes/spells')(app)

var server = app.listen(port)
console.log('The magic happens on port ' + port)

module.exports = app // just for testing