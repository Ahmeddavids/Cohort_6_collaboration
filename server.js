const express = require('express');
require('./config/database');
const app = express();
const schoolRouter = require('./Routers/schoolRouter');
const Port = 5000;

app.use(express.json());
app.use(schoolRouter);

app.listen(Port, () => {
  console.log(`server listening to ${Port}`)
});