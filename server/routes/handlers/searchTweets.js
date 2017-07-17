const Twitter = require('twitter')
const config = require('../../config.js')


function searchTweets(req, res) {

    console.log('searching tweets')

    // Configure twitter with our API keys
    const T = new Twitter(config)

    // Set up your search parameters
    // q:           A UTF-8, URL-encoded search query of 500 characters maximum
    // count:       The number of tweets to return per page
    // result_type: return only the most recent results in the response
    // lang:        only english language tweets

    const params = {
        q: '@SkylabCoders',
        count: 5,
        result_type: 'recent',
        lang: 'en'
    }

    T.get('search/tweets', params, function(err, data, response) {
        if (err) throw err

          
          res.json(data.statuses[0])

        // data.statuses.forEach((tweet, index) => {

        //     console.log(tweet.text, ' | ', tweet.user.screen_name)


            // const id = { id: tweet.id_str }

            // T.post('favorites/create', id , function(err, response){
            //   if (err) throw err

            //     const username = response.user.screen_name;
            //     const tweetId = response.id_str;
            //     console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)

            // })

        // })

    })

    // var stream = T.stream('statuses/filter', { track: 'javascript' });
    // stream.on('data', function(event) {
    //     console.log(event && event.text);
    // });

    // stream.on('error', function(error) {
    //     throw error;
    // });

    // res.send('searching tweets')
}

module.exports = searchTweets
