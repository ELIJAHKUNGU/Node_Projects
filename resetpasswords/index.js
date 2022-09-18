const express = require('express');
const cors = require('cors');
require("express-async-errors")
require("dotenv").config()
const DbConnection = require("./db")

const app = express()


const port = 8080;

DbConnection();


app.use(cors());
app.use(express.json());
// app.use("/api/v1", require("./routes/index.route"));
app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});



app.listen(5000, ()=> {
    console.log("The server is up and running");
})