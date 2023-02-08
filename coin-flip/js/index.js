
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
  if (!heads && !tails) {
    message = "*Please choose either Heads or Tails to start the game.";
    msgError.innerHTML = message;
    errorMsg.appendChild(msgError);
  // if heads is selected, log user input "heads" and game result
  } else if (heads) {
    console.log(`You selected Heads`);
    let result = getResults();
    console.log(`Result: ${result}`);
  // if tails is selected, log user input "tails" and game result
  } else {
    console.log(`You selected Tails`);
    let result = getResults();
    console.log(`Result: ${result}`);
  }
  
});


// don't need an event listener for the reset/try again button; reset function built into button type reset
  // after adding results image/video, may want to include that with reset


// add function to randomize result

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