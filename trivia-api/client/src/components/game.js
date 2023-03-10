import { useState, useEffect } from "react";
import QuestionCard from "./questionCard";
import ResultCard from "./resultCard";

const Game = () => {

    const [totalQuestions, setTotalQuestions] = useState([]);
    const [currentQAndA, setCurrentQAndA] = useState(0);

    const [validated, setValidated] = useState();

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
        console.log(totalQuestions[currentQAndA].question);
        console.log(selectedAnswer);

        // call server and send data to validate
        fetch(`http://localhost:8000/api/validate`, {
            method: "POST",
            headers: {
                "Content-type": "application/JSON"
            },
            body: JSON.stringify({ question: totalQuestions[currentQAndA].question, answer: selectedAnswer })
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setValidated(result);
            });
    }

    // add function for Next button to go to next question
    const changeQuestion = () => {
        setCurrentQAndA(currentQAndA + 1);
        setValidated(undefined);
    }


    return (
        <div className="Container">
            {/* for now, either the QuestionCard OR the ResultCard will be displayed */}
            {/* final score card will be displayed at very end, need to factor that in */}
            {totalQuestions.length > 0 ?
                (!validated ? <QuestionCard questionSet={totalQuestions[currentQAndA]} getUserAnswer={handleUserAnswer} /> : <ResultCard result={validated} changeQuestion={changeQuestion} />)
                : <></>
            }
        </div>
    )

}

export default Game;
