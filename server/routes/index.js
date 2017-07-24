const express = require('express')
const router = express.Router()


const teachSentiment = require('./handlers/teach.js')
const predictSentiment = require('./handlers/predict.js')
// const search = require('./handlers/search')


router.post('/teach', teachSentiment)
router.post('/predict', predictSentiment)
// router.get('/search', search)



module.exports = router
