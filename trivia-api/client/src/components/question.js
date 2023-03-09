const Question = (props) => {
  let question = props.question.question;

  console.log(question)

  return (
    <div className={"question-text"}>
      {props.question}
    </div>
  );
};

export default Question;