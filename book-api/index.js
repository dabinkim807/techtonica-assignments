const express = require("express");
const cors = require("cors");
const books = require('./books.js');

const app = express();
const PORT = 5001;

app.use(cors());
// middleware that enables express to read JSON; when you make a request that uses Content-Type = application/json, this middleware parses that request
app.use(express.json());


// ** GET requests **

// returns homepage
app.get('/', (req, res) => {
  res.json("Hello! This is my server!");
})
// returns all books in inventory
app.get('/api/books', (req, res) => {
  res.json(books);
})
// search for a specific book
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

  // if there's no book with that ID,
  res.send('no books');
})


// ** POST request - create new book entry **
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


// ** PUT request - update existing book **
app.put('/api/books/:bookID', (req, res) => {
  let requestedBook = req.params.bookID;

  for (let book of books) {
    if (book.isbn === requestedBook) {
      book.author = req.body.author;
      book.title = req.body.title;
      book.format = req.body.format;
    }
  }

  res.send("updated book");
})


// ** DELETE request **
app.delete('/api/books/:bookID', (req, res) => {
  let requestedBook = req.params.bookID;
  console.log(requestedBook);
  try {
    for (let i = 0; i < books.length; i++) {
      if (books[i].isbn === requestedBook) {
        // books.splice(books[i], 1);
        console.log("delete");
      }
    }
  } catch (error) {
    console.log(error);
    res.send("failed");
  }
  res.send("done");
})



app.listen(PORT, () => console.log(`Hello! Server is running on port ${PORT}`));