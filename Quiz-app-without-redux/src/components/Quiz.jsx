import { useContext, useState } from "react";
import { GameStateContext } from "../helpers/Context";
import { Questions } from "../helpers/Questions";

export function Quiz() {
    const [selected, setSelected] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [submitAnswer, setSubmitAnswer] = useState(false);
    const { setGameState, player, score, setScore } = useContext(GameStateContext);

    function handleSelectionChange(index) {
        if (index === selected) {
            setSelected(0);
        } else {
            setSelected(index);
        }
    }

    function handleNextQuestion() {
        setCurrentQuestion(q => q + 1);
        setSubmitAnswer(false);
        setSelected(0);
    }

    function handleEndQuiz() {
        if (selected === 0) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
            setGameState("end");
        }
    }

    function handleScoreChange() {
        if (Questions[currentQuestion].answerId === selected) {
            setScore(s => s + 1);
        }
    }

    function handleSubmitAnswer() {
        if (selected === 0) {
            setShowAlert(true);
        } else {
            handleScoreChange();
            setShowAlert(false);
            setSubmitAnswer(true);
        }
    }

    return <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h3>Player Name: <b>{player}</b></h3>
        <h3>Current Score: <b>{score}</b></h3>
        <div className="card mt-5" style={{ width: '18rem' }}>
            <h5 className="card-header">{Questions[currentQuestion].question}</h5>
            <div className="card-body">
                <h5 className="card-title">Question</h5>
                <div className="card-text pt-2">
                    <div className="list-group">
                        {Questions[currentQuestion].options.map(o => {
                            return (!submitAnswer ? <button type="button" key={o.option} className={`list-group-item list-group-item-action ${selected === o.id && "active"}`} onClick={() => handleSelectionChange(o.id)}>{o.option}</button> :
                                <button type="button" key={o.option} className={`list-group-item list-group-item-action ${selected === o.id && Questions[currentQuestion].answerId == selected ? "list-group-item-success" : (selected === o.id && Questions[currentQuestion].answerId !== selected ? "list-group-item-danger" : "")}`} style={{ pointerEvents: submitAnswer ? 'none' : 'auto' }} onClick={() => handleSelectionChange(o.id)}>{o.option}</button>)
                        })}
                    </div>
                </div>
                {submitAnswer ? <button className="btn btn-outline-secondary mt-3" onClick={currentQuestion === Questions.length - 1 ? handleEndQuiz : handleNextQuestion}>{currentQuestion === Questions.length - 1 ? "Finish Quiz" : "Next Question"}</button> :
                    <button className="btn btn-outline-secondary mt-3" onClick={handleSubmitAnswer}>Submit Answer</button>}
                {showAlert && <div class="alert alert-danger mt-3" role="alert">
                    Choose an option to proceed
                </div>
                }
                {submitAnswer && selected != 0 &&
                    ((selected === Questions[currentQuestion].answerId) ? <div class="alert alert-success mt-4" role="alert">
                        Correct Answer
                    </div> :
                        <div class="alert alert-danger mt-4" role="alert">
                            Incorrect Answer
                            <hr />
                            <p class="mb-0">The correct answer is: {Questions[currentQuestion].options[Questions[currentQuestion].answerId - 1].option}</p>
                        </div>)
                }
            </div>
        </div>
    </div>
}