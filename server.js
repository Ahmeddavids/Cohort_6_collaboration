const express = require("express");
require("./config/database");
const app = express();
const Port = process.env.PORT;
const schoolRouter = require("./Routers/schoolRouter");

app.use(express.json());
app.use(schoolRouter);

app.listen(Port, () => {
  console.log(`server listening to ${Port}`);
});
