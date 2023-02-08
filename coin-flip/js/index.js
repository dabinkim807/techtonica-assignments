
// we want to see the special messages right near the respective field where the trigger event is happening
const divErrors = document.getElementsByClassName("error");
let errorMsg = divErrors[0]; 

const divResults = document.getElementsByClassName("resultMessage");
let resultMsg = divResults[0];

// set up to print a message inside the div when user submits blank form
let msgError = document.createElement("span");
let message = "";

let msgResult = document.createElement("span");
let userMsg = "";



//// add an event listener to the submit/flip button

document.getElementById("form").addEventListener("submit", (event) => {
  // prevent the default handling of errors, so we can handle it explicitly
  event.preventDefault();
  
  // grab my user inputs
  let heads = document.getElementById("heads").checked;
  let tails = document.getElementById("tails").checked;

  // check if both radio buttons are unselected
  if (!heads && !tails) {
    message = "*Please choose either Heads or Tails to start the game.";
    msgError.innerHTML = message;
    errorMsg.appendChild(msgError);
  // if heads is selected, log user input "heads" and game result
  } else if (heads) {
    console.log("You selected Heads");
    let result = getResults();
    console.log(`Result: ${result}`);

    // if result is heads and user chose heads, send user congrats message
    if (result === "Heads") {
      userMsg = "Congrats!!! You Won!";
      msgResult.innerHTML = userMsg;
      resultMsg.appendChild(msgResult);
    } else {
      userMsg = "Oh No!! You Lost...";
      msgResult.innerHTML = userMsg;
      resultMsg.appendChild(msgResult);
    }
  // if tails is selected, log user input "tails" and game result
  } else {
    console.log("You selected Tails");
    let result = getResults();
    console.log(`Result: ${result}`);

    // if result is tails and user chose tails, send user congrats message
    if (result === "Tails") {
      userMsg = "Congrats!!! You Won!";
      msgResult.innerHTML = userMsg;
      resultMsg.appendChild(msgResult);
    } else {
      userMsg = "Oh No!! You Lost...";
      msgResult.innerHTML = userMsg;
      resultMsg.appendChild(msgResult);
    }
  }
  
});


//// add an event listener to the reset/play again button

document.getElementById("form").addEventListener("reset", (event) => {
  // I don't think I need to prevent default in this case? I still want the form to clear

  // change image back to default
  document.getElementById("myImg").src = "images/depositphotos_125165712-stock-illustration-businessman-hand-throwing-up-a.jpeg";

  // change divError and divResults back to nothing??

});


//// add function to randomize result

function getResults(heads=0, tails=1) {
  // get a random number either 0 or 1
  let answer = Math.floor(Math.random() * (tails - heads + 1) + heads); // The maximum is inclusive and the minimum is inclusive
  // if answer is equal to 1, return "tails"
  if (answer) {
    document.getElementById("myImg").src = "images/tails_coin_crop.jpg";
    return "Tails";
  }
  // if answer is equal to 0, return "heads"
  document.getElementById("myImg").src = "images/head_coin_crop.jpg";
  return "Heads";
}