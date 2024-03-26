document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.getElementById("game-container");
  const timeDisplay = document.getElementById("time");
  const movesDisplay = document.getElementById("moves");
  const remainingMovesDisplay = document.getElementById("remaining-moves");

  const symbols = ["☝", "☝", "⚡", "⚡", "⚽", "⚽", "⛅", "⛅", "⛪", "⛪"];
  shuffle(symbols);
  let lockBoard = false;
  let moves = 0;
  let remainingMoves = 20;
  let matchesFound = 0;
  let gameStarted = false;
  let timer;

  function updateGameInfo() {
    movesDisplay.textContent = moves;
    remainingMovesDisplay.textContent = remainingMoves;
    remainingMovesDisplay.style.color = remainingMoves <= 5 ? "red" : "black";
  }

  symbols.forEach((symbol, index) => {
    const card = document.createElement("div");
    const back = document.createElement("div");
    back.textContent = symbol;
    back.className = "back";
    card.className = "card";
    card.appendChild(back);
    card.addEventListener("click", () => flipCard(card, back));
    gameContainer.appendChild(card);
  });

  function flipCard(card, back) {
    if (!gameStarted) {
      startTimer();
      gameStarted = true;
    }
    if (
      lockBoard ||
      card.classList.contains("flipped") ||
      card.classList.contains("match") ||
      remainingMoves <= 0
    )
      return;

    card.classList.add("flipped");
    back.style.color = "transparent";
    card.style.backgroundColor = "#009688";
    setTimeout(() => (back.style.color = "#fff"), 300);

    const flippedCards = gameContainer.querySelectorAll(".flipped:not(.match)");
    if (flippedCards.length === 2) {
      lockBoard = true;
      setTimeout(() => checkForMatch(flippedCards), 400);
      moves++;
      remainingMoves--;
      updateGameInfo();
    }
  }

  function checkForMatch(flippedCards) {
    const [card1, card2] = flippedCards;
    if (card1.firstChild.textContent === card2.firstChild.textContent) {
      card1.classList.add("match");
      card2.classList.add("match");
      matchesFound++;
      if (matchesFound === symbols.length / 2) {
        clearInterval(timer);
        alert(
          `Sveikinu! Žaidimą baigėte per ${timeDisplay.textContent} sekundžių ir ${moves} ėjimais.`
        );
      }
    } else {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      card1.style.backgroundColor = "#f0f0f0";
      card2.style.backgroundColor = "#f0f0f0";
    }
    lockBoard = false;
  }

  function startTimer() {
    let startTime = Date.now();
    timer = setInterval(() => {
      const currentTime = Math.floor((Date.now() - startTime) / 1000);
      timeDisplay.textContent = currentTime;
    }, 1000);
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
});
