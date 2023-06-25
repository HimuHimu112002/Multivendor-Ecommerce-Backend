const express = require('express')
const app = express()
const DatabaseConnection = require('./database/database.js')
require('dotenv').config()
const cors = require('cors')
app.use(cors())

DatabaseConnection()


app.get('/TestFunc', function (req, res) {
  res.send('Hello World')
})

app.listen(8000)