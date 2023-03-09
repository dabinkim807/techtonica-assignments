import Question from "./question"
import Answer from "./answer"
// import { useState } from "react";

const QuestionCard = (props) => {
  // questionSet={totalQuestions[currentQAndA]}
  // onClick={handleUserClicked}
  let question = props.questionSet.question;
  let answers = props.questionSet.answers;

  let handleUserClicked = props.onClick;


  return (
    <div className={"question-section"}>
      <Question question={question} />

      {/* <Answer answer={answers[0]} onClick={handleUserClicked} />
      <Answer answer={answers[1]} onClick={handleUserClicked} />
      <Answer answer={answers[2]} onClick={handleUserClicked} />
      <Answer answer={answers[3]} onClick={handleUserClicked} /> */}
      
      {answers.map((answer, index) => {
        return <Answer key={index} answer={answer} onClick={handleUserClicked} />
      })}


    </div>
  );
};

export default QuestionCard;