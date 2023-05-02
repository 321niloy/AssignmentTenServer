const express = require('express')
var cors = require('cors')
const app = express()
const port = 9000
const card  = require('./data/cards.json')

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/card', (req, res) => {
  res.send(card)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})