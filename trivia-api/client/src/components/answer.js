const Answer = (props) => {
  // answer={answers}
  // onClick={handleUserClicked}
  let answer = props.answer;
  // let handleUserClicked = props.onClick;


  const handleClick = (event) => {
    event.preventDefault();
    console.log(answer);
    props.onClick(answer);
  }

  return (
    <div className={"answer-section"}>
      <button onClick={handleClick}>{answer}</button>
    </div>
  );
};

export default Answer;