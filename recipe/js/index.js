function hover(img) {
  document.getElementById("myImg").src = "images/resized-empty-plate-crumbs-eating-white-background-t-empty-plate-crumbs-eating-white-background-132819310 copy.jpeg"
}

function hoverOut(img) {
  document.getElementById("myImg").src = "images/No-Bake-Strawberry-Cheesecake-Recipe-n-500x500.jpeg"
}


// need to add <div class="error"></div> to html

document.getElementById("form").addEventListener("submit", (event) => {
  // prevent the default handling of errors, so we can handle it explicitly
  event.preventDefault();

  // grab my user inputs
  // .trim() deletes whitespaces from input
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");

  // we want to see the error message right beneath the respective field where the error is happening
  const divErrors = document.getElementsByClassName("error");
  let nameMsg = divErrors[0]; 
  let emailMsg = divErrors[1];
  let phoneMsg = divErrors[2]; 
  let addressMsg = divErrors[3];
  let correctMsg = divErrors[3];

  // set up to print a message inside the div when user submits blank form
  let msgError = document.createElement("p");
  let msgCorrect = document.createElement("span");
  let message = "";

  // check if name is empty
  if (name === "") {
    message = "Your name cannot be empty";
    msgError.innerHTML = message;
    nameMsg.appendChild(msgError);

  // check if email is empty
  } else if (email === "") {
    message = "Your email cannot be empty";
    msgError.innerHTML = message;
    emailMsg.appendChild(msgError);

  // check if phone number is longer than 10 characters
  } else if (phone.length !== 10) {
    message = "You must enter a valid phone number";
    msgError.innerHTML = message;
    phoneMsg.appendChild(msgError);

  // check if address is empty
  } else if (address === "") {
    message = "Your address cannot be empty";
    msgError.innerHTML = message;
    addressMsg.appendChild(msgError);

  // all fields completed successfully
  } else {
    message = "Thank you for your information";
    msgCorrect.innerHTML = message;
  }

  correctMsg.appendChild(msgCorrect);
  
  // log all user inputs
  console.log(name, email, phone, address);

  
});