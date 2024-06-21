import { useContext } from "react"
import { GameStateContext } from "../helpers/Context"
import { Questions } from "../helpers/Questions";

export function EndScreen() {
    const {setGameState, setPlayer, score, setScore} = useContext(GameStateContext);

    function handlePlayAgain() {
        setGameState("menu");
        setPlayer("");
        setScore(0);
    }

    return <div className="container d-flex flex-column justify-content-center align-items-center vh-100"><div className="card" style={{ width: '22rem' }}>
        <div className="card-body">
            <div class="alert alert-secondary" role="alert">
                <h4 class="alert-heading">Quiz Results</h4>
                <p class = "h5">You have completed the Quiz</p>
                <hr />
                <h3 class="mb-0">Your Score: {score} out of {Questions.length} </h3>
            </div>
            <button className="btn btn-outline-dark mt-3" onClick={handlePlayAgain}>Play Again</button>
        </div>
    </div> 
    </div>
}