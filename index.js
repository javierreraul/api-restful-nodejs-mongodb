
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Error establishing a database connection: ${err}`)
  }
  console.log('Connection established with database...')
})

app.listen(config.port, () => {
  console.log(`API REST running at http://localhost:${config.port}`)
})
