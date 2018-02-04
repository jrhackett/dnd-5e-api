'use strict';

var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var promise = require('bluebird');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var cors = require('cors');
var config = require('./config');
var spellRouter = require('./routes/spells');

var app = express();
var port = config.port;
// const accessLogStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), { flags: 'a' })

mongoose.Promise = promise;
mongoose.connect(config.database_url, { useMongoClient: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('combined', { stream: accessLogStream }));

app.use('/api/v1/spells', spellRouter);

var server = app.listen(port);

module.exports = app;