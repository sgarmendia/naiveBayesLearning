const nbc = require('wink-naive-bayes-text-classifier')()
const nlp = require('wink-nlp-utils')
const fs = require('fs')

function predictSentiment(req, res) {

    const { predicttext } = req.body

    nbc.definePrepTasks([
        // Simple tokenizer 
        nlp.string.tokenize0,
        // Common Stop Words Remover 
        nlp.tokens.removeWords,
        // Stemmer to obtain base word 
        nlp.tokens.stem
    ]);

    // nbc.defineConfig({ considerOnlyPresence: true, smoothingFactor: 0.5 })

    const json = fs.readFileSync('./learning/learnJson.json', 'utf8')

    nbc.importJSON( json )

    nbc.consolidate()

    const result = nbc.predict( predicttext )
    const odds = nbc.computeOdds( predicttext )
    // const stats = nbc.stats()
    // const eval =nbc.evaluate(predicttext, 'positive')
    // const metrics = nbc.metrics()
    // const json = nbc.exportJSON()


    res.send({result , odds})

}

module.exports = predictSentiment