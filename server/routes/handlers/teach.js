const nbc = require('wink-naive-bayes-text-classifier')()
const nlp = require('wink-nlp-utils')

function teachSentiment(req, res) {

    console.log(req.body)

    const { teachtext, mood } = req.body

    nbc.definePrepTasks([
        // Simple tokenizer 
        nlp.string.tokenize0,
        // Common Stop Words Remover 
        nlp.tokens.removeWords,
        // Stemmer to obtain base word 
        nlp.tokens.stem
    ]);

    nbc.defineConfig({ considerOnlyPresence: true, smoothingFactor: 0.5 })
    // Train! 
    nbc.learn(teachtext, mood)
    nbc.learn('I like you', 'positive')
    nbc.learn('I adore you', 'positive')
    nbc.learn('I kiss you', 'positive')
    nbc.learn('I hug you', 'positive')
    nbc.learn('I hate you', 'negative')
    nbc.learn('I kill you', 'negative')
    nbc.learn('I loath you', 'negative')
    nbc.learn('I despise you', 'negative')
    nbc.learn('I kick you', 'negative')

    nbc.consolidate()

    const result = nbc.predict( 'I love you' )

    console.log(result)

    res.send(result)


}



module.exports = teachSentiment