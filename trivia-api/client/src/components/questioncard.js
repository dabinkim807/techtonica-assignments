import Question from "./question"
import Answer from "./answer"
// import { useState } from "react";

const QuestionCard = (props) => {
  // questionSet={totalQuestions[currentQAndA]}
  // getUserAnswer={handleUserAnswer}
  let question = props.questionSet.question;
  let answers = props.questionSet.answers;

  let handleUserAnswer = props.getUserAnswer;

  
  return (
    <div className={"question-section"}>
      <Question question={question} />

      {/* <Answer answer={answers[0]} getUserAnswer={handleUserAnswer} />
      <Answer answer={answers[1]} getUserAnswer={handleUserAnswer} />
      <Answer answer={answers[2]} getUserAnswer={handleUserAnswer} />
      <Answer answer={answers[3]} getUserAnswer={handleUserAnswer} /> */}
      
      {answers.map((answer, index) => {
        return <Answer key={index} answer={answer} getUserAnswer={handleUserAnswer} />
      })}

      <button onClick={props.getUserAnswer}>Next</button>

    </div>
  );
};

export default QuestionCard;