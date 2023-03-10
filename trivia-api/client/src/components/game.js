import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";
import ResultCard from "./resultCard";

const Game = () => {

    const [ totalQuestions, setTotalQuestions ] = useState([]);
    const [ currentQAndA, setCurrentQAndA ] = useState(0);

    const [ userAnswer, setUserAnswer ] = useState();
    const [ validated, setValidated ] = useState();

    const loadData = () => {
        fetch('http://localhost:8000/api/game')
            .then((response) => response.json())
            .then(data => {
                // console.log("This is line 11", data);
                setTotalQuestions(data);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    const handleUserAnswer = (selectedAnswer) => {
        // console.log(selectedAnswer);
        console.log(totalQuestions[currentQAndA].question);

        setUserAnswer(selectedAnswer);
        console.log(userAnswer);

        // if there are more questions left in totalQuestions, go on to the next question
        if (currentQAndA + 1 < totalQuestions.length) {
            setCurrentQAndA(currentQAndA + 1);
        } // otherwise, display some final result card
        
        sendUserAnswer(selectedAnswer);

    }

    // call server and send data to validate
    const sendUserAnswer = (userAnswer) => {
        fetch(`http://localhost:8000/api/validate`, {
            method: "POST",
            headers: {
                "Content-type": "application/JSON"
            },
            body: JSON.stringify({ question: totalQuestions[currentQAndA].question, answer: userAnswer })
        }) 
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setValidated(result);
          });
      }



    // setCurrentQAndA based on user selected answer choice via onClick
    // send a callback prop into QuestionCard
        // QuestionCard will call callback, return data (user's answer) back up to Game
        // in Game, setCurrentQAndA() to currentQAndA + 1

    return (
        <div className="Container">
            {/* for now, either the QuestionCard OR the ResultCard will be displayed */}
            {/* final score card will be displayed at very end, need to factor that in */}
            {validated ? <QuestionCard questionSet={totalQuestions[currentQAndA]} getUserAnswer={handleUserAnswer} /> : ResultCard}
        </div>
    )

}

export default Game;
