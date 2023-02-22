import defaultImage from "../images/depositphotos_125165712-stock-illustration-businessman-hand-throwing-up-a.jpeg";
import tailsImage from "../images/tails_coin_crop_border.jpg";
import headsImage from "../images/head_coin_crop_border.jpg";
import { useState } from "react";


function Result(props) {

  const [side, setSide] = useState("");
  // const [scoreWin, setScoreWin] = useState(0);
  // const [scoreLose, setScoreLose] = useState(0);
  const [errorHidden, setErrorHidden] = useState(true);
  const [result, setResult] = useState("");
  const [flip, setFlip] = useState("");
  const [resultMsg, setResultMsg] = useState("");

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
      setResultMsg("You Won!");
      // setScoreWin(scoreWin + 1);
    } else {
      setResult("lose");
      setResultMsg("You Lost...");
      // setScoreLose(scoreLose + 1);
    }
  }

  function onResetClick(event) {
    event.preventDefault();
    setSide("");
    setErrorHidden(true);
    setResult("");
    // setScoreWin(0);
    // setScoreLose(0);
    setFlip("");
    setResultMsg("");
  }


  return (
    <section className="row">
      <section>
        <h2>Result: {resultMsg}</h2> 

        <div className="imgbox">
          <img id="defaultImg" src={defaultImage} style={{ display: flip !== "" ? "none" : "block" }} alt="thumb flipping coin into air" />
          <img id="headsImg" src={headsImage} style={{ display: flip !== "heads" ? "none" : "block" }} alt="face of gold coin" />
          <img id="tailsImg" src={tailsImage} style={{ display: flip !== "tails" ? "none" : "block" }} alt="tails of gold coin" />
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
  )
}

export default Result;