'use strict';

var config = {};

var env = process.env.NODE_ENV || 'development';
var validEnvironments = ['development', 'test', 'production'];

if (validEnvironments.includes(env)) {
  config = require('../env/' + env);
}

module.exports = config;