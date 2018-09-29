const express = require('express')
const app = express()
const route = require('./controllers')
const port = 3000

const Sequelize = require('sequelize')
const sequelize = new Sequelize('', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
})

app.use('/api', route())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))