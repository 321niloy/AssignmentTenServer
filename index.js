const express = require('express')
var cors = require('cors')
const app = express()
const port = 9000
const card  = require('./data/cards.json')
const Allrecipe = require('./data/recipeCards.json')

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/card', (req, res) => {
  res.send(card)
})

app.get('/Allrecipe', (req, res) => {
  res.send(Allrecipe)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})