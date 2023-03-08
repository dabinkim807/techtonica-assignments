const QuestionCard = (props) => {
    
    return (
      <div className={"question-section"}>
        <div className='question-text'>{props.question.question}</div>
      </div>
    );
  };

export default QuestionCard;