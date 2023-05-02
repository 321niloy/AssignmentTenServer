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



app.get('/Allrecipe/:id', (req,res)=>{
  const id = parseInt(req.params.id)
  const Recipesid = Allrecipe.filter(c => c.id === id)
  res.send(Recipesid)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})