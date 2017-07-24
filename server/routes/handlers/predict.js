const nbc = require('wink-naive-bayes-text-classifier')()
const nlp = require('wink-nlp-utils')
const fs = require('fs')

function predictSentiment(req, res) {

    // console.log(req.body)

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
    // Train! 
    // nbc.learn(teachtext, mood)
    // nbc.learn('I like you', 'positive')
    // nbc.learn('I adore you', 'positive')
    // nbc.learn('I kiss you', 'positive')
    // nbc.learn('I hug you', 'positive')
    // nbc.learn('I hate you', 'negative')
    // nbc.learn('I kill you', 'negative')
    // nbc.learn('I loath you', 'negative')
    // nbc.learn('I despise you', 'negative')
    // nbc.learn('I kick you', 'negative')

    let json = fs.readFileSync('./learning/learnJson.json', 'utf8')

    nbc.importJSON( json )

    nbc.consolidate()

    const result = nbc.predict( predicttext )
    const odds = nbc.computeOdds( predicttext )
    // const stats = nbc.stats()
    // const eval =nbc.evaluate('I love you', 'positive')
    // const metrics = nbc.metrics()
    // const json = nbc.exportJSON()

    json = JSON.parse(json)

    res.send({result , odds , json})

}

module.exports = predictSentiment