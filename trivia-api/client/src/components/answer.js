import { useState } from "react";

const Answer = (props) => {
  // answer={answers}
  // onClick={handleUserClicked}
  let answer = props.answer;
  // let handleUserClicked = props.onClick;

  const [ userClicked, setUserClicked ] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setUserClicked(true);
    props.onClick(userClicked);
  }

  return (
    <div className={"answer-section"}>
      <button onClick={handleClick}>{answer}</button>
    </div>
  );
};

export default Answer;