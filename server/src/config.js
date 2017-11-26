let config = {}

const env = process.env.NODE_ENV || 'development'
const validEnvironments = ['development', 'test', 'production']

if(validEnvironments.includes(env)) {
  config = require('../env/' + env) 
}

module.exports = config
