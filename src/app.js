require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')


const app = express()


app.use(cors())
app.use(helmet())

app.get()



module.exports = app