const express = require('express')
const router = express.Router()


const teachSentiment = require('./handlers/teach')
// const predictSentiment = require('./handlers/predict')
// const search = require('./handlers/search')


router.post('/teach', teachSentiment)
// router.get('/predict', predictSentiment)
// router.get('/search', search)



module.exports = router
