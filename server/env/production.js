// module.exports = {
//   database_url: process.env.DATABASE_URL,
//   port: process.env.PORT
// }

var envFile = __dirname + '/env.json'
var jsonfile = require('jsonfile')

var envVars = jsonfile.readFileSync(envFile)

module.exports = {
  database_url: envVars["database_url"],
  port: envVars["port"]
}
