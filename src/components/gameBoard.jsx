import { Node, findPath } from "../logic/knightMoves";

export default function GameBoard({ state, handleState }) {
  const board = [];

  const handleClick = (e) => {
    if (state.val === 0) {
      const [i, j] = e.target.id.split(",");
      handleState((state) => ({
        ...state,
        val: 1,
        start: new Node([parseInt(i), parseInt(j)]),
      }));
    } else if (state.val === 1) {
      const [i, j] = e.target.id.split(",");
      let start = state.start;
      let end = new Node([parseInt(i), parseInt(j)]);
      const path = findPath(start, end);
      handleState({
        val: 0,
        start: 0,
        end: 0,
        prevPath: path,
      });
    }
  };

  const makeHighlightedCell = (i, j, k, handleClick) => {
    return (
      <div
        key={`${i}, ${j}`}
        id={`${i}, ${j}`}
        onClick={handleClick}
        className="highlighted-cell"
      >
        {k}
      </div>
    );
  };

  const makeCell = (i, j, handleClick) => {
    return (
      <div
        key={`${i}, ${j}`}
        id={`${i}, ${j}`}
        onClick={handleClick}
        className="grid-cell"
      ></div>
    );
  };

  const makeInitialCell = (i, j, handleClick) => {
    return (
      <div
        key={`${i}, ${j}`}
        id={`${i}, ${j}`}
        onClick={handleClick}
        className="grid-cell-initial"
      ></div>
    );
  };

  const makeFinalCell = (i, j, handleClick) => {
    return (
      <div
        key={`${i}, ${j}`}
        id={`${i}, ${j}`}
        onClick={handleClick}
        className="grid-cell-final"
      ></div>
    );
  };

  const highlightPath = (board) => {
    if (state.prevPath !== -1) {
      for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
          let cellFound = 0;
          for (let k = 0; k < state.prevPath.length; k++) {
            if (state.prevPath[k][0] === i && state.prevPath[k][1] === j) {
              if (k === 0) {
                board.push(makeInitialCell(i, j, handleClick));
              } else if (k === state.prevPath.length - 1) {
                board.push(makeFinalCell(i, j, k, handleClick));
              } else {
                board.push(makeHighlightedCell(i, j, k, handleClick));
              }
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
          if (
            state.start !== 0 &&
            state.start.position[0] === i &&
            state.start.position[1] === j
          ) {
            board.push(makeInitialCell(i, j, handleClick));
          } else {
            board.push(makeCell(i, j, handleClick));
          }
        }
      }
    }
  };

  highlightPath(board);

  return <div className="grid-box">{board}</div>;
}
