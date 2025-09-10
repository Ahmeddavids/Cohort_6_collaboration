const express = require('express')
require('./config/database')
const app = express()
const Port = process.env.PORT

app.listen(Port, () => {
  console.log(`server listening to ${Port}`)
})
