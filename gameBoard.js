class boardSquare {
    constructor(position) {
      this.position = position;
    }
  }
  
  const gameBoard = (function () {
    let board = [];
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        board.push(new boardSquare([i, j]));
      }
    }
    return { board };
  })();