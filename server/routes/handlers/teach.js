const nbc = require( 'wink-naive-bayes-text-classifier' )()
const nlp = require( 'wink-nlp-utils' )

function teachSentiment(req, res) {

    console.log('teaching running')

    res.send('teaching running')


}



module.exports = teachSentiment
