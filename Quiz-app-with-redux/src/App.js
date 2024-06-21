import './App.css';
import { Provider, useSelector } from 'react-redux';
import { GameStateContext } from './helpers/Context';
import { useState } from 'react';
import { MainMenu } from './components/MainMenu';
import { Quiz } from './components/Quiz';
import { EndScreen } from './components/EndScreen';
import store from './helpers/store'

function App() {
  console.log("Hello");
  const gameState = useSelector(state => state.quiz.gameState);
  const [player, setPlayer] = useState("");
  
  return (
    <GameStateContext.Provider value = {{player, setPlayer}}>
    <div className="App">
      {gameState === "main" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "end" && <EndScreen />}
    </div>
    </GameStateContext.Provider>
  );
}
const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
