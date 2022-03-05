import "./App.css";
import { shuffle } from "./helpers";
import { useState } from "react";

const App = () => {
  const DICE = [
    ["V", "I", "L", "L", "E", "V"],
    ["O", "I", "T", "T", "A", "A"],
    ["A", "I", "N", "A", "S", "T"],
    ["A", "N", "P", "F", "S", "K"],
    ["A", "P", "H", "S", "K", "O"],
    ["D", "E", "S", "R", "I", "L"],
    ["E", "I", "E", "N", "U", "S"],
    ["H", "I", "K", "N", "M", "U"],
    ["A", "G", "A", "Ä", "L", "Ä"],
    ["C", "I", "O", "T", "M", "U"],
    ["A", "J", "T", "O", "T", "O"],
    ["E", "I", "T", "O", "S", "S"],
    ["E", "L", "Y", "T", "T", "R"],
    ["A", "K", "I", "T", "M", "V"],
    ["A", "I", "L", "K", "V", "Y"],
    ["A", "L", "R", "N", "N", "U"],
  ];

  const [dice, setDice] = useState(shuffle(DICE));

  return (
    <>
      <h3>BOGGLE</h3>
      <div className="game-board">
        {dice.map((die) => (
          <div className="die">{shuffle(die)[0]}</div>
        ))}
      </div>
      <button onClick={() => setDice(shuffle(DICE))}>Shuffle</button>
    </>
  );
};

export default App;
