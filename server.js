var express = require('express'),
    exphbs = require('express-handlebars'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    config = require('./config.js')

mongoose.connect(config.database_url)

app.use(morgan('dev'))
app.use(express.static(__dirname + '/app'))

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

require('./app/routes/index')(app)
require('./app/routes/spells')(app)

app.listen(port)
console.log('The magic happens on port ' + port)