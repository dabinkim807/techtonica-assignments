// import { useState } from "react";

const ResultCard = (props) => {
  // result={validated}
  // changeQuestion={changeQuestion}

  return (
    <div className="result-section">
      <div className="result-text">
        {props.result.isCorrect ? "Great job, that's correct!" : `Sorry, the correct answer is ${props.result.correctAnswer}`}
      </div>
      <button onClick={props.changeQuestion}>Next</button>
    </div>
  );
};

export default ResultCard;