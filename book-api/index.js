const express = require("express");
const cors = require("cors");
const books = require('./books.js');

const app = express();
const PORT = 5001;

app.use(cors());
// middleware that enables express to read JSON; when you make a request that uses Content-Type = application/json, this middleware parses that request
app.use(express.json());

// make API
app.get('/', (req, res) => {
  res.json("Hello! This is my server!");
})

app.get('/api/books', (req, res) => {
  res.json(books);
})

app.get('/api/books/:bookID', cors(), async (req, res) => {
  // The request
  let requestedBook = req.params.bookID;
  console.log(requestedBook);

  // The response
  for (let book of books) {
    if (book.isbn === requestedBook) {
      res.json(book);
    }
  }
})

// This responds a POST request for the homepage
app.post('/api/books', (req, res) => {
  let newBook = {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    format: req.body.format
  };
  books.push(newBook);

  res.send("saved new book");
})




app.listen(PORT, () => console.log(`Hello! Server is running on port ${PORT}`));