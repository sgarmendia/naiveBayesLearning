const nbc = require('wink-naive-bayes-text-classifier')()
const nlp = require('wink-nlp-utils')
const fs = require('fs')

function teachSentiment(req, res) {

    const {
        teachtext,
        mood
    } = req.body

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

    nbc.importJSON(fs.readFileSync('./learning/learnJson.json', 'utf-8'))

    nbc.learn(teachtext, mood)

    const json = nbc.exportJSON()

    fs.writeFileSync( './learning/learnJson.json', json , 'utf-8' )

    res.send(json)

}

module.exports = teachSentiment
