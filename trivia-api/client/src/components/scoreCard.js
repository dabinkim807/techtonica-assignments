import { useState } from "react";


const ScoreCard = (props) => {
  // score={score} outOf={totalQuestions.length}
  return (
    <div className="score">
      You got {props.score}/{props.outOf} questions correct!
    </div>
  );
}

export default ScoreCard;
