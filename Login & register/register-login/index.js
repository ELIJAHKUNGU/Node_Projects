const express = require("express");
const app = express();
const cors = require("cors");



const PORT = 3000;

app.use(express.json());

const router = require("./routes/routes")
app.use("/api", router)