var config = {}

var env = process.env.NODE_ENV || 'development'

if(env === 'development' || env === 'test' || env === 'production') {
  config = require('../env/' + env) 
}

module.exports = config
