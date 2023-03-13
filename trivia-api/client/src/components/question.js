import {decode} from 'html-entities';

const Question = (props) => {
  // console.log(question)

  return (
    <div className={"question-text"}>
      {decode(props.question)}
    </div>
  );
};

export default Question;