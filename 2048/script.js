document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.querySelector(".game-board");
  const newGameButton = document.querySelector(".new-game-button");
  const scoreDisplay = document.querySelector(".score");
  let score = 0;
  let board;

  function createInitialBoard() {
    let newBoard = [];
    for (let i = 0; i < 4; i++) {
      newBoard[i] = [0, 0, 0, 0];
    }
    return newBoard;
  }

  function createBoard() {
    gameBoard.innerHTML = "";
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        let value = board[i][j];
        tile.textContent = value > 0 ? value : "";
        tile.setAttribute("data-value", value);
        gameBoard.appendChild(tile);
      }
    }
  }

  function generateRandomTile() {
    let emptyTiles = [];
    board.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell === 0) emptyTiles.push({ i, j });
      });
    });

    if (emptyTiles.length === 0) return;

    const { i, j } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    board[i][j] = 2;
    updateBoard();
  }

  function startNewGame() {
    board = createInitialBoard();
    score = 0;
    scoreDisplay.textContent = score;
    createBoard();
    generateRandomTile();
    generateRandomTile();
  }

  function updateBoard() {
    let tiles = document.querySelectorAll(".tile");
    board.flat().forEach((value, i) => {
      tiles[i].textContent = value > 0 ? value : "";
      tiles[i].setAttribute("data-value", value);
    });
    scoreDisplay.textContent = score;
  }

  document.addEventListener("keydown", handleKeyPress);

  function handleKeyPress(e) {
    e.preventDefault();
    switch (e.key) {
      case "ArrowUp":
        moveUp();
        break;
      case "ArrowDown":
        moveDown();
        break;
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
    }
  }

  function moveTiles(row) {
    let arr = row.filter((val) => val);
    let missing = 4 - arr.length;
    let zeros = Array(missing).fill(0);
    arr = arr.concat(zeros);

    for (let i = 0; i < 3; i++) {
      if (arr[i] > 0 && arr[i] === arr[i + 1]) {
        arr[i] *= 2;
        score += arr[i];
        arr[i + 1] = 0;
      }
    }

    arr = arr.filter((val) => val);
    missing = 4 - arr.length;
    zeros = Array(missing).fill(0);
    arr = arr.concat(zeros);
    return arr;
  }

  function rotateBoard(clockwise = true) {
    let newBoard = [];
    for (let i = 0; i < 4; i++) {
      newBoard[i] = [];
      for (let j = 0; j < 4; j++) {
        newBoard[i][j] = clockwise ? board[3 - j][i] : board[j][3 - i];
      }
    }
    return newBoard;
  }
  function boardsAreEqual(board1, board2) {
    return JSON.stringify(board1) === JSON.stringify(board2);
  }

  function moveUp() {
    let initialBoard = JSON.parse(JSON.stringify(board));
    board = rotateBoard(false);
    board = board.map((row) => moveTiles(row));
    board = rotateBoard();
    if (!boardsAreEqual(initialBoard, board)) {
      afterMove();
    } else {
    }
  }

  function moveDown() {
    let initialBoard = JSON.parse(JSON.stringify(board));
    board = rotateBoard();
    board = board.map((row) => moveTiles(row));
    board = rotateBoard(false);
    if (!boardsAreEqual(initialBoard, board)) {
      afterMove();
    } else {
    }
  }

  function moveLeft() {
    let initialBoard = JSON.parse(JSON.stringify(board));
    board = board.map((row) => moveTiles(row));
    if (!boardsAreEqual(initialBoard, board)) {
      afterMove();
    } else {
    }
  }

  function moveRight() {
    let initialBoard = JSON.parse(JSON.stringify(board));
    board = board.map((row) => row.reverse());
    board = board.map((row) => moveTiles(row));
    board = board.map((row) => row.reverse());
    if (!boardsAreEqual(initialBoard, board)) {
      afterMove();
    } else {
    }
  }

  function afterMove() {
    updateBoard();
    generateRandomTile();
  }

  newGameButton.addEventListener("click", startNewGame);

  startNewGame();
});
