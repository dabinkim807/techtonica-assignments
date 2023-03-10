import Question from "./question"
import Answer from "./answer"

const QuestionCard = (props) => {
  // questionSet={totalQuestions[currentQAndA]}
  // getUserAnswer={handleUserAnswer}
  // progress={currentQAndA+1} 
  // outOf={totalQuestions.length}

  let question = props.questionSet.question;
  let answers = props.questionSet.answers;
  let handleUserAnswer = props.getUserAnswer;

  
  return (
    <div className={"question-section"}>
      {props.progress}/{props.outOf}
      <Question question={question} />
      
      {answers.map((answer, index) => {
        return <Answer key={index} answer={answer} getUserAnswer={handleUserAnswer} />
      })}

    </div>
  );
};

export default QuestionCard;