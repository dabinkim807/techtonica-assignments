import './App.css';
import defaultImage from "./images/depositphotos_125165712-stock-illustration-businessman-hand-throwing-up-a.jpeg";
import tailsImage from "./images/tails_coin_crop_border.jpg";
import headsImage from "./images/head_coin_crop_border.jpg";
import { useState } from "react";


function App() {

  const [side, setSide] = useState("");
  const [scoreWin, setScoreWin] = useState(0);
  const [scoreLose, setScoreLose] = useState(0);
  const [errorHidden, setErrorHidden] = useState(true);
  const [result, setResult] = useState("");
  const [flip, setFlip] = useState("");

  function onClickButton(event) {
    event.preventDefault();
    if (side === "") {
      setErrorHidden(false);
      return;
    }

    setErrorHidden(true);

    const coinFlip = Math.random() > 0.5 ? "heads" : "tails";
    setFlip(coinFlip);

    if (side === coinFlip) {
      setResult("win");
      setScoreWin(scoreWin + 1);
    } else {
      setResult("lose");
      setScoreLose(scoreLose + 1);
    }
  }

  function onResetClick(event) {
    event.preventDefault();
    setSide("");
    setErrorHidden(true);
    setResult("");
    setScoreWin(0);
    setScoreLose(0);
    setFlip("");
  }


  return (
    <div>
      <h1>Coin Flip Game</h1>
      <section className="row">
        <section>
          <h2>Result:</h2>
          <div className="resultMessage">
            <div className="result" hidden={result !== "win"}>Congrats!!! You Won!</div>
            <div className="result" hidden={result !== "lose"}>Oh No!!! You Lost...</div>
          </div>
          <div className="imgbox">
            <img id="myImg" src={defaultImage} style={{ display: flip !== "" ? "none" : "block" }} alt="thumb flipping coin into air" />
            <img id="myImg" src={headsImage} style={{ display: flip !== "heads" ? "none" : "block" }} alt="face of gold coin" />
            <img id="myImg" src={tailsImage} style={{ display: flip !== "tails" ? "none" : "block" }} alt="tails of gold coin" />
          </div>
        </section>
        <section>
          <h2>Your Guess:</h2>
          <form id="form">
            <div className="error" hidden={errorHidden}>*Please choose either Heads or Tails to start the game.</div>

            <div>
              <input id="heads" name="coin" type="radio" checked={side === "heads"} onChange={() => setSide("heads")}></input>
              <label htmlFor="heads" className="radio-left">Heads</label>

              <input id="tails" name="coin" type="radio" checked={side === "tails"} onChange={() => setSide("tails")}></input>
              <label htmlFor="tails" className="radio-left">Tails</label>
            </div>

            <div>
              <button type="submit" onClick={onClickButton} id="flip">Flip</button>
              <button type="reset" id="try-again" onClick={onResetClick}>Try Again</button>
            </div>
          </form>
        </section>
      </section>
      <section className="scoreboard">
        <h2>Scoreboard</h2>
        <div className="scoreRow">
          <div>
            <span id="scoreWin">Wins: {scoreWin}</span>
          </div>
          <div>
            <span id="scoreLose">Losses: {scoreLose}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
