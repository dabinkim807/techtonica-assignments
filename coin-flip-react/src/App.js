import './App.css';
import defaultImage from "./images/depositphotos_125165712-stock-illustration-businessman-hand-throwing-up-a.jpeg";
import { useState } from "react";


function App() {

  const [side, setSide] = useState("");

  function onClickButton(event) {
    event.preventDefault();

    console.log("clicked");
    console.log(side);
  }

  function onResetClick(event) {
    event.preventDefault();

    setSide("");
  }

  return (
    <div>
      <h1>Coin Flip Game</h1>
      <section class="row">
        <section>
          <h2>Result:</h2>
          <div class="resultMessage"></div>
          <div class="imgbox">
            <img id="myImg" src={defaultImage} alt="thumb flipping coin into air" />
          </div>
        </section>
        <section>
          <h2>Your Guess:</h2>
          <form id="form">
            <div class="error"></div>

            <div>
              <input id="heads" name="coin" type="radio" checked={side === "heads"} onChange={() => setSide("heads")}></input>
              <label for="heads" class="radio-left">Heads</label>

              <input id="tails" name="coin" type="radio" checked={side === "tails"} onChange={() => setSide("tails")}></input>
              <label for="tails" class="radio-left">Tails</label>
            </div>

            <div>
              <button type="submit" onClick={onClickButton} id="flip">Flip</button>
              <button type="reset" id="try-again" onClick={onResetClick}>Try Again</button>
            </div>
          </form>
        </section>
      </section>
      <section class="scoreboard">
        <h2>Scoreboard</h2>
        <div class="scoreRow">
          <div>
            <span id="scoreWin">Wins: 0</span>
          </div>
          <div>
            <span id="scoreLose">Losses: 0</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
