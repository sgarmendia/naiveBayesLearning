const nbc = require('wink-naive-bayes-text-classifier')()
const nlp = require('wink-nlp-utils')
const fs = require('fs')

function teachSentiment(req, res) {

    const { teachtext, mood } = req.body

    const aText = teachtext.split(' ')

    let json = JSON.parse(fs.readFileSync('./learning/learnJson.json', 'utf8'))

    json[1][mood] += 1
    let oMood = json[2][mood]
    let sumMood = 0

    aText.forEach(word => {

        oMood[word] ? oMood[word] += 1 : oMood[word] = 1

        if (json[4].indexOf(word) < 0) json[4].push(word)

    })

    for (let key in oMood) {

        sumMood += oMood[key] 

    }

    json[3][mood] = sumMood

    const sJson = JSON.stringify(json)
    fs.writeFile('./learning/learnjson.json', sJson, err => { if (err) throw err })

    res.send(sJson)

}

module.exports = teachSentiment