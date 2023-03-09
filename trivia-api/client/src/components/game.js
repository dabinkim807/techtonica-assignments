import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {

    const [questions, setQuestions] = useState([]);
    const [ atQ, setAtQ ] = useState(0);

    const loadData = () => {
        fetch('http://localhost:8000/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data);
                setQuestions(data);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="Container">
            {questions.length > 0 ? <QuestionCard question={questions[atQ]} /> : <></>}
        </div>
    )

}

export default Game;
