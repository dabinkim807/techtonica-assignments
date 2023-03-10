import {decode} from 'html-entities';

const Answer = (props) => {
  // answer={answers}
  // getUserAnswer={handleUserAnswer}
  let answer = props.answer;

  const handleAnswer = (event) => {
    event.preventDefault();
    // console.log(answer);
    props.getUserAnswer(answer);
  }

  return (
    <div className={"answer-section"}>
      <button onClick={handleAnswer}>{decode(answer)}</button>
    </div>
  );
};

export default Answer;