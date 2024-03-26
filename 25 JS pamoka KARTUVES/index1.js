document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("languageSelect");

  function loadLanguages() {
    const languages = sessionStorage.getItem("languages")
      ? JSON.parse(sessionStorage.getItem("languages"))
      : null;

    if (languages) {
      languages.forEach((lang) => appendLanguageOption(lang));
    } else {
      fetch("https://random-word-api.herokuapp.com/languages")
        .then((response) => response.json())
        .then((data) => {
          sessionStorage.setItem("languages", JSON.stringify(data)); // Saugome gautas kalbas sessionStorage
          data.forEach((lang) => appendLanguageOption(lang));
        })
        .catch((error) => console.error("Error loading languages:", error));
    }
  }

  function appendLanguageOption(lang) {
    const option = document.createElement("option");
    option.value = lang;
    option.textContent = lang.toUpperCase();
    languageSelect.appendChild(option);
  }

  async function startGame() {
    const language = languageSelect.value || "en";
    try {
      const response = await fetch(
        `https://random-word-api.herokuapp.com/word?lang=${language}&number=1`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const [word] = await response.json();
        selectedWord = word.toUpperCase();
        guessedLetters = [];
        wrongGuesses = [];
        remainingGuesses = 6;
        displayWord();
        document.getElementById(
          "messages"
        ).innerText = `Likę spėjimai: ${remainingGuesses}`;
        document.getElementById("wrongGuesses").innerText =
          "Neteisingi spėjimai: ";
        console.log(selectedWord);
      }
    } catch (error) {
      console.log("Error fetching a word: ", error);
    }
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
      messages.innerText = `Deja, spėjimai baigėsi! Pralaimėjote. Žodis buvo: ${selectedWord}`;
    } else if (
      selectedWord.split("").every((letter) => guessedLetters.includes(letter))
    ) {
      messages.innerText = "Sveikiname! Jūs atspėjote žodį!";
    }

    document.getElementById("letterInput").value = "";
  }

  loadLanguages();
  startGameBtn.addEventListener("click", startGame);
  guessBtn.addEventListener("click", guessLetter);
});
