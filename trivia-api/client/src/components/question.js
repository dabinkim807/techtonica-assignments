const Question = (props) => {
  // console.log(question)

  return (
    <div className={"question-text"}>
      {props.question}
    </div>
  );
};

export default Question;