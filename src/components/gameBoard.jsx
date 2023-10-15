import { useState } from "react";
import { Node, findPath } from "../logic/knightMoves";

export default function GameBoard() {
  const [currentState, setState] = useState({
    val: 0,
    start: 0,
    end: 0,
    prevPath: -1,
  });
  const board = [];

  const handleClick = (e) => {
    if (currentState.val === 0) {
      const [i, j] = e.target.id.split(",");
      setState((state) => ({
        ...state,
        val: 1,
        start: new Node([parseInt(i), parseInt(j)]),
      }));
    } else if (currentState.val === 1) {
      const [i, j] = e.target.id.split(",");
      let start = currentState.start;
      let end = new Node([parseInt(i), parseInt(j)]);
      const path = findPath(start, end);
      setState({
        val: 0,
        start: 0,
        end: 0,
        prevPath: path,
      });
    }
  };

  const makeHighlightedCell = (i, j, k, handleClick) => {
    return (
      <div key={`${i}, ${j}`} id={`${i}, ${j}`} onClick={handleClick} className="highlighted-cell">
        {k}
      </div>
    );
  };

  const makeCell = (i, j, handleClick) => {
    return (
      <div key={`${i}, ${j}`} id={`${i}, ${j}`} onClick={handleClick} className="grid-cell"></div>
    );
  };

  const highlightPath = (board) => {
    if (currentState.prevPath !== -1) {
      for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
          let cellFound = 0;
          for (let k = 0; k < currentState.prevPath.length; k++) {
            if (
              currentState.prevPath[k][0] === i &&
              currentState.prevPath[k][1] === j
            ) {
              board.push(makeHighlightedCell(i, j, k, handleClick));
              cellFound = 1;
              break;
            }
          }
          if (cellFound === 0) {
            board.push(makeCell(i, j, handleClick));
          }
        }
      }
    } else {
      for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
          board.push(makeCell(i, j, handleClick));
        }
      }
    }
  };

  highlightPath(board);

  return <div className="grid-box">{board}</div>;
}
