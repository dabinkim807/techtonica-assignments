const express = require("express");
const cors = require("cors");
const books = require('./books.js');

const app = express();
const PORT = 5001;

app.use(cors());
// middleware that enables express to read JSON; when you make a request that uses Content-Type = application/json, this middleware parses that request
app.use(express.json());

// to render static files from the client folder
app.use(express.static('client'));


// ** GET requests **

// returns all books in inventory
app.get('/api/books', (req, res) => {
  res.json(books);
})
// search for a specific book
app.get('/api/books/:bookID', cors(), async (req, res) => {
  // The request
  let requestedBook = req.params.bookID;

  // The response
  for (let book of books) {
    if (book.isbn === requestedBook) {
      return res.json(book);
    }
  }

  // when you have multiple res messages, or whenever you do res.send(), always return!!!
  // if there's no book with that ID,
  return res.send("Book does not exist.");
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

  return res.send("New book has been saved!");
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

  return res.send("Book has been successfully updated.");
})


// ** DELETE request **
app.delete('/api/books/:bookID', (req, res) => {

  let deletedBook = req.params.bookID;
  console.log("deleting " + deletedBook);
  for (let i = 0; i < books.length; i++) {
    if (books[i].isbn === deletedBook) {
      books.splice(i, 1);
    }
  }

  return res.send("Book has been successfully deleted.");
})


//creates a route `/` that is the homepage
app.get('/', (req, res) => {
  //testing that was working
  //res.send("Hello, welcome to Dana's Library!");

  //this send the response to open the index.html in that directory
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(PORT, () => console.log(`Hello! Server is running on port ${PORT}`));