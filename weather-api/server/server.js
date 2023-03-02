const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const dataWeather = require("./data"); // hardcoded data
const apiKey = process.env.API_KEY;

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/"
app.get('/', (req, res) => {
  res.json('Hello from My template ExpressJS');
});

// creates an endpoint for the route "/api/weather"
app.get('/api/weather', (req, res) => {
  console.log(req.query);
  const params = new URLSearchParams({
    q: req.query.cityName,
    appid: apiKey,
    units: "imperial"
  });
  
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
  console.log(url);
  
  // make fetch call to get real API data
  fetch(url)
    .then((response) => response.json())
    .then((data) => res.send(data)); // just have to send the data itself


  // get hardcoded data
  // console.log(dataWeather);
  // res.json(dataWeather);
})

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});