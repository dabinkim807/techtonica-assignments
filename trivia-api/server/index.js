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

const answerKey = {};

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

  // instead of returning entire musicalTheatre data, I want to only display questions and answers in random order so user can't cheat
  const totalQuestions = []; // [ { question: 0, answer: 0 } ];

  musicalTheatre.results.forEach((q) => {
    // for post route validation, split for efficiency (so I only have to create this once)
    answerKey[q.question] = q.correct_answer;

    // combine correct answer with incorrect answers
    // use splice and Math.random()

    // have to use slice because answers was modifying the actual data instead of copying, resulting in duplicates + more answer choices
    let answers = q.incorrect_answers.slice();
    // musicalTheatre.results.length = 4; Math.random 0.1 - 0.9 -> 0.4 - 3.6 --> Math.floor 0 - 3
    let randomIndex = Math.floor(Math.random() * answers.length+1); 
  
    answers.splice(randomIndex, 0, q.correct_answer);

    totalQuestions.push({ question: q.question, answers: answers });
  })
  res.json(totalQuestions);
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


// validation route
// checks user's answer with correct answer in backend, so user can't see correct answers in advance
app.post('/api/validate', async (req, res) => {
  // try {
  //   const URL = "https://opentdb.com/api.php?amount=4&category=13&difficulty=medium&type=multiple";
  //   const apiRequest = await fetch(URL);
  //   const questions = await apiRequest.json();
  //   res.send(questions);
  // } catch(err) {
  //   console.log(err);
  // }
  let question = req.body.question;
  let answer = req.body.answer;
  let correctAnswer = answerKey[question];

  let isCorrect = answer === correctAnswer;

  let response = {
    isCorrect: isCorrect,
    correctAnswer: correctAnswer
  }

  return res.json(response);
})


app.listen(PORT, () => console.log(`Hello! Server is running on Port http://localhost:${PORT}`));