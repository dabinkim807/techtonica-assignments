const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = 8080;

app.use(cors());
app.listen(PORT, () => console.log(`Hello! This is my server in ${PORT}`));

app.get('/', (req, res) => {
  // res.json("Hello! This will be a single page");
  res.sendFile(path.join(__dirname, "../client/index.html"));
})

const path = require("path");

app.use(express.static("../client"));
// might have to add ".." before /client
express.static(path.join(__dirname, "/client"));
