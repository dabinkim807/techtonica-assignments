import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

// hardcoded data
import musicalTheatre from './musicalTheatre.js';

const app = express();
const PORT = 8000;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
  res.json("Hello! This is Dana's trivia game server");
});


// Make the GET request to grab all the questions for the trivia api

// try async await catch method
// hardcoded method
app.get('/api/game', async (req, res) =>{
  // try {
  //   const URL = "https://opentdb.com/api.php?amount=4&category=13&difficulty=medium&type=multiple";
  //   const apiRequest = await fetch(URL);
  //   const questions = await apiRequest.json();
  //   res.send(questions);
  // } catch(err) {
  //   console.log(err);
  // }
  res.json(musicalTheatre);
})

// fetch then then catch method
// app.get('/api/game', (req, res) =>{
//   const url = "https://opentdb.com/api.php?amount=4&category=13&difficulty=medium&type=multiple";  
//   fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     res.send(data); 
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// })



app.listen(PORT, () => console.log(`Hello! Server is running on Port http://localhost:${PORT}`));