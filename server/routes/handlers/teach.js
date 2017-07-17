const nbc = require('wink-naive-bayes-text-classifier')()
const nlp = require('wink-nlp-utils')
const fs = require('fs')

function teachSentiment(req, res) {

    // console.log(req.body)

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

    var learnJson = fs.readFileSync('./learning/learnJson.json', 'utf8')
    nbc.importJSON( learnJson )

    nbc.consolidate()

    const result = nbc.predict( teachtext )
    // const odds = nbc.computeOdds( 'I love you' )
    // const stats = nbc.stats()
    // const eval =nbc.evaluate('I love you', 'positive')
    // const metrics = nbc.metrics()
    // const json = nbc.exportJSON()

    // fs.writeFile ('./learning/learnJson.json', json , (err) =>{ if (err) throw err })

    console.log(learnJson)

    res.send(learnJson)


}



module.exports = teachSentiment