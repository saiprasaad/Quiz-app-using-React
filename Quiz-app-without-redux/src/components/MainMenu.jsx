import { useContext } from "react";
import { GameStateContext } from "../helpers/Context";

export function MainMenu() {
    const {setGameState, player, setPlayer} = useContext(GameStateContext);

    function handleStartQuiz() {
        if(player === "") {
            setPlayer("Anonymous")
        }
        setGameState("playing");
    }

    function handleNameChange(event) {
        setPlayer(event.target.value);
    }

    return <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="card" style={{ width: '18rem' }}>
        <h5 className="card-header h2">Main Menu</h5>
        <div className="card-body">
            <h5 className="card-title">Enter your name</h5>
            <p className="card-text pt-2">
                <input className="form-control" placeholder="Your name...." onChange={handleNameChange}/>
            </p>
            <button className="btn btn-outline-secondary mt-3" onClick={handleStartQuiz}>Start Quiz</button>
        </div>
    </div>
</div>
}