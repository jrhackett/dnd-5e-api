import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import promise from 'bluebird'
import bodyParser from 'body-parser'
import fs from 'fs'
import path from 'path'
import config from './config'
import spellRouter from './routes/spells'

const app = express()
const port = config.port
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), { flags: 'a' })

mongoose.Promise = promise
mongoose.connect(config.database_url, { useMongoClient: true })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('combined', { stream: accessLogStream }))

app.use('/api/v1/spells', spellRouter)

const server = app.listen(port)

module.exports = app
