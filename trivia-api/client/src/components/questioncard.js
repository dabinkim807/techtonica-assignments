import Question from "./question"
import Answer from "./answer"
import { useState } from "react";

const QuestionCard = (props) => {
  // questionSet={totalQuestions[currentQAndA]}
  // onClick={handleUserClicked}
  let question = props.questionSet.question;
  let answers = props.questionSet.answers;

  let handleUserClicked = props.onClick;

  // const [ index, setIndex ] = useState(0);

  // const distributeA = () => {
  //   const nextIndex = index++;
  //   setIndex(nextIndex);
  //   return answers[index];
  // }

  // for (let i = 0; i < answers.length; i++) {
  //   setAnswer(answers[i]);
  // }

  // console.log(question)

  return (
    <div className={"question-section"}>
      <Question question={question} />

      {/* <Answer answer={answers[0]} onClick={handleUserClicked} />
      <Answer answer={answers[1]} onClick={handleUserClicked} />
      <Answer answer={answers[2]} onClick={handleUserClicked} />
      <Answer answer={answers[3]} onClick={handleUserClicked} /> */}
      
      {/* <Answer answer={answers[index]} onClick={handleUserClicked} />
      <Answer answer={distributeA} onClick={handleUserClicked} />
      <Answer answer={distributeA} onClick={handleUserClicked} />
      <Answer answer={distributeA} onClick={handleUserClicked} /> */}
      
      {answers.map((answer, index) => {
        return <Answer key={index} answer={answer} onClick={handleUserClicked} />
      })}
    </div>
  );
};

export default QuestionCard;