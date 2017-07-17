const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../client')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const routerNaiveBayes = require('./routes')

app.use('/', routerNaiveBayes)

module.exports = app