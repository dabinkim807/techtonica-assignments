import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = () => {

    const [ totalQuestions, setTotalQuestions ] = useState([]);
    const [ currentQAndA, setCurrentQAndA ] = useState(0);

    const loadData = () => {
        fetch('http://localhost:8000/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data);
                setTotalQuestions(data);
            })
    }

    const handleUserClicked = (selectedAnswer) => {
        // Answer Component will only send data back if userClicked === true
        console.log(selectedAnswer);

        if (currentQAndA + 1 < totalQuestions.length) {
            setCurrentQAndA(currentQAndA + 1);
        }
        
    }

    useEffect(() => {
        loadData();
    }, [])

    // setCurrentQAndA based on user selected answer choice via onClick
    // send a callback prop into QuestionCard
        // QuestionCard will call callback, return data (user has selected an answer) back up to Game
        // in Game, setCurrentQAndA() to currentQAndA++

    return (
        <div className="Container">
            {totalQuestions.length > 0 ? <QuestionCard questionSet={totalQuestions[currentQAndA]} onClick={handleUserClicked} /> : <></>}
        </div>
    )

}

export default Game;
