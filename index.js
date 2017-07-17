require('dotenv').config()
global.__base = __dirname;

const app = require('./server/app.js')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))