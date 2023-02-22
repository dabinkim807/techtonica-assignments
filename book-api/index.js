const express = require("express");
const cors = require("cors");
const books = require('./books.js')

const app = express();

app.use(cors());

const PORT = 5000;

app.listen(PORT, () => console.log(`Hello! Server is running on port ${PORT}`));