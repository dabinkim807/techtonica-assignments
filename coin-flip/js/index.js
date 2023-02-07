
// add an event listener to the submit/flip button

document.getElementById("form").addEventListener("submit", (event) => {
  // prevent the default handling of errors, so we can handle it explicitly
  event.preventDefault();

  // grab my user inputs
  let heads = document.getElementById("heads").checked;
  let tails = document.getElementById("tails").checked;

  // we want to see the error message right beneath the respective field where the error is happening
  const divErrors = document.getElementsByClassName("error");
  let errorMsg = divErrors[0]; 

  // set up to print a message inside the div when user submits blank form
  let msgError = document.createElement("span");
  let message = "";

  // check if both radio buttons are unselected
  if (heads === false && tails === false) {
    message = "*Please choose either Heads or Tails to start the game.";
    msgError.innerHTML = message;
    errorMsg.appendChild(msgError);
  } 
  
  // log user input
  console.log(heads.checked);
  console.log(tails.checked);
});

// add an event listener to the reset/try again button


// add function to randomize result