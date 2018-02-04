const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const promise = require('bluebird')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const config = require('./config')
const spellRouter = require('./routes/spells')

const app = express()
const port = config.port
// const accessLogStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), { flags: 'a' })

mongoose.Promise = promise
mongoose.connect(config.database_url, { useMongoClient: true })

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('combined', { stream: accessLogStream }))

app.use('/api/v1/spells', spellRouter)

const server = app.listen(port)

module.exports = app
