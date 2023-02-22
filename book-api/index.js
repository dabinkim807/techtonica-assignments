const express = require("express");
const cors = require("cors");
const books = require('./books.js');

const app = express();

app.use(cors());


// make API
app.get('/', (req, res) => {
  res.json("Hello! This is my server!");
})

app.get('/api/books', (req, res) => {   
  res.json(books);
})

app.get('/api/books/:bookID', cors(), async (req, res) =>{

  // The request
  let requestedBook = req.params.bookID;
  console.log(requestedBook);

  // The response
  for (let book of books){
    if (book.isbn === requestedBook){
      res.json(book);
    }
  }

})


const PORT = 5002;

app.listen(PORT, () => console.log(`Hello! Server is running on port ${PORT}`));