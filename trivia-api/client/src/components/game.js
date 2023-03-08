import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {

    const [questions, setQuestions] = useState([]);

    const loadData = () => {
        fetch('http://localhost:8000/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="Container">
            <div className='question-count'>
                {/* question # should be a STATE in my Progress component */}
                <span>Question 1</span>/{questions.length}
            </div>
            {/* whenever you have a list of components, you need to send in a unique "key" prop */}
            {/* you don't have to do anything with it, but React needs it */}
            {questions.map((question, index) => {
                return <QuestionCard key={index} question={question} />
            })}
        </div>
    )

}

export default Game;
