const words = ["šuo", "katė"];
let selectedWord = "";
let guessedLetters = [];
let remainingGuesses = 6;
let wrongGuesses = [];

function selectRandomWord() {
  selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
  guessedLetters = [];
  wrongGuesses = [];
  remainingGuesses = 6;
  displayWord();
  document.getElementById(
    "messages"
  ).innerText = `Likę spėjimai: ${remainingGuesses}`;
  document.getElementById("wrongGuesses").innerText = "Neteisingi spėjimai: "; // Atnaujinkite UI
}

function displayWord() {
  const wordDisplay = document.getElementById("wordDisplay");
  wordDisplay.innerHTML = selectedWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
}

function guessLetter() {
  const letterInput = document
    .getElementById("letterInput")
    .value.toUpperCase();
  const messages = document.getElementById("messages");

  if (!letterInput.match(/^[A-ZĄČĘĖĮŠŲŪŽ]$/)) {
    messages.innerText = "Prašome įvesti vieną raidę (A-Z, Ą-Ž).";
    return;
  }

  if (
    guessedLetters.includes(letterInput) ||
    wrongGuesses.includes(letterInput)
  ) {
    messages.innerText = "Šią raidę jau spėjote. Bandykite kitą.";
    return;
  }

  if (!selectedWord.includes(letterInput)) {
    remainingGuesses--;
    wrongGuesses.push(letterInput);

    messages.innerText = `Neteisinga. Likę spėjimai: ${remainingGuesses}`;
    document.getElementById("wrongGuesses").innerText =
      "Neteisingi spėjimai: " + wrongGuesses.join(", ");
  } else {
    messages.innerText = "Teisinga! Spėkite toliau.";
    guessedLetters.push(letterInput);
    displayWord();
  }

  if (remainingGuesses <= 0) {
    messages.classList.add("gameOver");
    messages.innerText = `Deja, spėjimai baigėsi! Pralaimėjote. Žodis buvo: ${selectedWord}`;
    return;
  } else if (
    selectedWord.split("").every((letter) => guessedLetters.includes(letter))
  ) {
    messages.classList.add("correct");
    messages.innerText = "Sveikiname! Jūs atspėjote žodį!";
  }

  document.getElementById("letterInput").value = "";
}

document
  .getElementById("newWordBtn")
  .addEventListener("click", selectRandomWord);
document.getElementById("guessBtn").addEventListener("click", guessLetter);

selectRandomWord();
