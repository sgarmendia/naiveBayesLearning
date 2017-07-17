const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../client')))

const routerTwitterSentApp = require('./routes')

app.use('/', routerTwitterSentApp)

module.exports = app