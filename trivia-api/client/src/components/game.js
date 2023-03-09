import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = () => {

    const [ totalQuestions, setTotalQuestions ] = useState([]);
    const [ currentQAndA, setCurrentQAndA ] = useState(0);
    const [ validated, setValidated ] = useState();

    const loadData = () => {
        fetch('http://localhost:8000/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data);
                setTotalQuestions(data);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    const handleUserAnswer = (selectedAnswer) => {
        console.log(selectedAnswer);
        console.log(totalQuestions[currentQAndA].question);
        if (currentQAndA + 1 < totalQuestions.length) {
            setCurrentQAndA(currentQAndA + 1);
        }
        
        // call server and send data to validate
        const sendUserAnswer = (selectedAnswer) => {
            fetch(`http://localhost:8000/api/validate`, {
                method: "POST",
                body: { question: totalQuestions[currentQAndA].question, answer: selectedAnswer }
            }) 
              .then((response) => response.json())
              .then((result) => {
                console.log(result);
                setValidated(result);
              });
          }
    }

    

    // setCurrentQAndA based on user selected answer choice via onClick
    // send a callback prop into QuestionCard
        // QuestionCard will call callback, return data (user's answer) back up to Game
        // in Game, setCurrentQAndA() to currentQAndA + 1

    return (
        <div className="Container">
            {totalQuestions.length > 0 ? <QuestionCard questionSet={totalQuestions[currentQAndA]} getUserAnswer={handleUserAnswer} /> : <></>}
        </div>
    )

}

export default Game;
