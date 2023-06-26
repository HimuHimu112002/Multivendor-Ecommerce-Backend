const express = require('express')
const app = express()
const DatabaseConnection = require('./database/database.js')
require('dotenv').config()
const cors = require('cors')
const routes = require("./routes/index.js")


//app.use(express.urlencoded({extended:true}))

app.use(cors())
app.use(express.json())

DatabaseConnection()

app.use(routes)


app.get('/TestFunc', function (req, res) {
  res.send('Hello World')
})

app.listen(8000)