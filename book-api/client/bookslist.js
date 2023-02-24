//This function load your books from your backend into the FrontEnd. It must do another GEt request. 

async function loadBooks(){
  const URL = "http://localhost:5000/api/books";

  const response = await fetch(URL);
  const responseBooks = await response.json();

  for (let book of responseBooks){
    const tempCard = `<div class="col-4">
      <div id="book-${book.isbn}" class="card">
        <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>
        <div>Author: ${book.author}</div> 
        <div>Format: ${book.format}</div>
        <hr>
        <button types="button" class="btn btn-primary" data-toggle="modal"  data-target="#editBookModal" onClick="showBook('${book.isbn}')">
      Show
      </button>
        </div>
      </div>
    </div>`
    document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + tempCard;
  }
}

loadBooks();

async function showBook(isbn) {
  const baseURL = "api/books";

  const response = await fetch(baseURL + "/" + isbn, { method: 'GET' });
  const book = await response.json();
  //console.log(book);

  const card = document.getElementById(`book-${book.isbn}`);
  const otherCards = document.querySelectorAll(".card");

  for(let otherCard of otherCards){
    if(otherCard.id !== card.id){
      //console.log(otherCard.id, card.id)
      otherCard.classList.remove("selected");
    }       
  }
  card.classList.toggle("selected");
  
}