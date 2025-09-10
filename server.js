const express = require('express')
require('./config/database')
const app = express()
const Port = 5000

app.listen(Port, () => {
  console.log(`server listening to ${Port}`)
})
