const express = require('express')
const app = express()
const route = require('./controllers')
const port = 3000

app.use('/api', route())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))