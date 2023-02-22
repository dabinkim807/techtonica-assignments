const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 5001;

app.listen(PORT, () => console.log(`Hello! Server is running on port ${PORT}`));