/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import GameUI from "./GameUI";

const Game = () => {
  const initialState = ["", "", "", "", "", "", "", "", ""];

  const [gameData, setGameData] = useState(initialState);
  const [isChanged, setisChanged] = useState(false);
  const onBoxClick = (index) => {
    let string = Array.from(gameData);
    string[index] = isChanged ? "O" : "X";
    setGameData(string);
    setisChanged(!isChanged);
  };

  const winner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameData[a] === gameData[b] && gameData[a] === gameData[c]) {
        return gameData[a];
      }
    }
    return null;
  };
  useEffect(() => {
    const getWinner = winner();
    setTimeout(()=>{
    if (getWinner) {
      alert(`${getWinner} has won the game`);
      setGameData(initialState);
    }},1000)
  }, [gameData]);

  return (
    <div className="app-header">
        <p>Click on any of the box to start the Game</p>
      <div className="row jc-center">
        <GameUI
          className={"b-bottom-right"}
          gameState={gameData[0]}
          onClick={() => onBoxClick(0)}
        />
        <GameUI
          className={"b-bottom-right"}
          gameState={gameData[1]}
          onClick={() => onBoxClick(1)}
        />
        <GameUI
          className={"b-bottom"}
          gameState={gameData[2]}
          onClick={() => onBoxClick(2)}
        />
      </div>
      <div className="row jc-center">
        <GameUI
          className={"b-bottom-right"}
          gameState={gameData[3]}
          onClick={() => onBoxClick(3)}
        />
        <GameUI
          className={"b-bottom-right"}
          gameState={gameData[4]}
          onClick={() => onBoxClick(4)}
        />
        <GameUI
          className={"b-bottom"}
          gameState={gameData[5]}
          onClick={() => onBoxClick(5)}
        />
      </div>
      <div className="row jc-center">
        <GameUI
          className={"b-right"}
          gameState={gameData[6]}
          onClick={() => onBoxClick(6)}
        />
        <GameUI
          className={"b-right"}
          gameState={gameData[7]}
          onClick={() => onBoxClick(7)}
        />
        <GameUI gameState={gameData[8]} onClick={() => onBoxClick(8)} />
      </div>
      <button
        className="clear-button"
        onClick={() => setGameData(initialState)}
      >
        Reset Game
      </button>
    </div>
  );
};

export default Game;
