import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import promise from 'bluebird'
import bodyParser from 'body-parser'
import config from './config'
import spellRouter from './routes/spells'

const app = express()
const port = config.port

mongoose.Promise = promise
mongoose.connect(config.database_url, { useMongoClient: true })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'))

app.use('/api/v1/spells', spellRouter)

const server = app.listen(port)

module.exports = app // just for testing
