const express = require('express')
const router = express.Router()


const searchTweets = require('./handlers/searchTweets')
// const tweetSentiment = require('./handlers/tweetSentiment')
// const searchById = require('./handlers/searchById')


router.get('/search', searchTweets)
// router.get('/sentiment', tweetSentiment)
// router.get('/tweet/:id', searchById)



module.exports = router
