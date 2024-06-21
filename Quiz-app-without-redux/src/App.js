import { useState } from 'react';
import './App.css';
import { Quiz } from './components/Quiz';
import { MainMenu } from './components/MainMenu';
import { EndScreen } from './components/EndScreen';
import { GameStateContext } from './helpers/Context';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [player, setPlayer] = useState("");
  const [score, setScore] = useState(0);

  console.log("Here")
  return (
    <div className="App">
      <GameStateContext.Provider value={{gameState, setGameState, player, setPlayer, score, setScore}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "end" && <EndScreen />}
      </GameStateContext.Provider>

    </div>
  );
}

export default App;
