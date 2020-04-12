
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes/index.js')

app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())
app.use('/api', api)

app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/api/products', (req, res) => {
  res.render('products')
})

module.exports = app
