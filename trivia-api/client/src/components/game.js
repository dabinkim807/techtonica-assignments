import { useState, useEffect } from "react";
import QuestionCard from "./questionCard";
import ResultCard from "./resultCard";
import ScoreCard from "./scoreCard";

const Game = () => {

    const [totalQuestions, setTotalQuestions] = useState([]);
    const [currentQAndA, setCurrentQAndA] = useState(0);
    const [validated, setValidated] = useState();
    const [score, setScore] = useState(0);

    const loadData = () => {
        fetch('http://localhost:8000/api/game')
            .then((response) => response.json())
            .then(data => {
                // console.log("This is line 11", data);
                setTotalQuestions(data);
            })
    }

    useEffect(() => {
        console.log("once");
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

                if (result.isCorrect) {
                    setScore(score + 1);
                }

            });
    }

    // add function for Next button to go to next question
    const changeQuestion = () => {
        setCurrentQAndA(currentQAndA + 1);
        setValidated(undefined);
    }

    // order of ifs matters!!
    const toggleCards = () => {
        if (totalQuestions.length === 0) {
            return <></>
        }
        if (currentQAndA === totalQuestions.length) {
            return <ScoreCard score={score} outOf={totalQuestions.length} />
        }
        if (!validated) {
            return <QuestionCard questionSet={totalQuestions[currentQAndA]} getUserAnswer={handleUserAnswer} progress={currentQAndA+1} outOf={totalQuestions.length} />
        }
        return <ResultCard result={validated} changeQuestion={changeQuestion} />
    }

    return (
        <div className="Container">
            {toggleCards()}
        </div>
    )

}

export default Game;
