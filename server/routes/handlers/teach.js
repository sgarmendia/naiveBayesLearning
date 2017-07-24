const nbc = require('wink-naive-bayes-text-classifier')()
const nlp = require('wink-nlp-utils')
const fs = require('fs')

function teachSentiment(req, res) {

    const { teachtext, mood } = req.body

    let json = JSON.parse(fs.readFileSync('./learning/learnJson.json', 'utf8'))

    json[1].mood +=1
    const sText = teachtext.split('')


    const sJson = JSON.stringify(json)
    fs.writeFile ('./learning/newJson.json', sJson , err => {if (err) throw err} )

    res.send(sJson)

}

module.exports = teachSentiment