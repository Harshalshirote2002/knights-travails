import { useState } from "react";
import "./App.css";
import GameBoard from "./components/gameBoard";
import Side from "./components/side";

function App() {
  const [currentState, setState] = useState({
    val: 0,
    start: 0,
    end: 0,
    prevPath: -1,
  });

  return (
    <>
      <Side state={currentState} handleState={setState} />
      <GameBoard state={currentState} handleState={setState} />
    </>
  );
}

export default App;
