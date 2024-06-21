import { useContext } from "react"
import { GameStateContext } from "../helpers/Context"
import { useDispatch, useSelector } from "react-redux";
import { endQuiz } from "../helpers/store";

export function EndScreen() {
    const score = useSelector(state => state.quiz.score);
    const questions = useSelector(state => state.quiz.questions);
    const {setPlayer} = useContext(GameStateContext);
    const dispatch = useDispatch();

    function handlePlayAgain() {
        setPlayer("");
        dispatch(endQuiz());
    }

    return <div className="container d-flex flex-column justify-content-center align-items-center vh-100"><div className="card" style={{ width: '22rem' }}>
        <div className="card-body">
            <div class="alert alert-secondary" role="alert">
                <h4 class="alert-heading">Quiz Results</h4>
                <p class = "h5">You have completed the Quiz</p>
                <hr />
                <h3 class="mb-0">Your Score: {score} out of {questions.length} </h3>
            </div>
            <button className="btn btn-outline-dark mt-3" onClick={handlePlayAgain}>Play Again</button>
        </div>
    </div> 
    </div>
}