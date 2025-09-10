const env = require('dotenv')
env.config()
const mongoose = require('mongoose')

const DB = process.env.MONGO_URL

mongoose
  .connect(DB)
  .then(() => {
    console.log(`Database connected`)
  })
  .catch((err) => {
    console.log(`Error connecting to database ${err.message}`)
  })
