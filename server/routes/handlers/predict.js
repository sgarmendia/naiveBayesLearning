const nbc = require('wink-naive-bayes-text-classifier')()
const nlp = require('wink-nlp-utils')
const fs = require('fs')

function predictSentiment(req, res) {

    const { predicttext } = req.body

    nbc.definePrepTasks([
        // Simple tokenizer
        nlp.string.tokenize,
        // Propagate the effect of negation to the next word
        nlp.tokens.propagateNegations,
        // Common Stop Words Remover
        nlp.tokens.removeWords,
        // Stemmer to obtain base word
        nlp.tokens.stem
    ])

    nbc.importJSON( fs.readFileSync('./learning/learnJson.json', 'utf-8') )

    nbc.consolidate()

    const result = nbc.predict( predicttext )
    const odds = nbc.computeOdds( predicttext )
    // const stats = nbc.stats()
    // const eval =nbc.evaluate(predicttext, 'positive')
    // const metrics = nbc.metrics()

    res.send({result , odds})

}

module.exports = predictSentiment
