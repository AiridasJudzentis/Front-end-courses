document.querySelector("button.name").addEventListener("click", () => {
  const description = document.createElement("p");
  description.textContent = "Aprašymas apie mane";
  document.body.appendChild(description);
});

//+1

let counter = 0;
document.querySelector("button.sum").addEventListener("click", () => {
  counter++;
  document.querySelector("h1").innerText = counter;
});

//Kopijuoti negalima

document.querySelector("p").addEventListener("copy", function (event) {
  event.preventDefault();
  alert("Kopijuoti negalima");
});

//Random

document.querySelector("button.random").addEventListener("click", () => {
  const random = Math.floor(Math.random() * 100);
  document.querySelector("h2").innerText = random;
});

//N-18

document.querySelector(".legal").addEventListener("click", () => {
  alert("Alus");
});
document.querySelector(".illegal").addEventListener("click", () => {
  alert("nepilnametis - nieko neturim");
});

//Yay or Nay

document.addEventListener("DOMContentLoaded", () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);

  function guessNumber(userGuess) {
    if (randomNumber === userGuess) {
      alert("Yay");
    } else {
      alert("Nay");
    }
  }
  document
    .getElementById("btn1")
    .addEventListener("click", () => guessNumber(1));
  document
    .getElementById("btn2")
    .addEventListener("click", () => guessNumber(2));
  document
    .getElementById("btn3")
    .addEventListener("click", () => guessNumber(3));
});

//Blogas vartotojas

document.querySelector("button").addEventListener("click", () => {
  document.querySelector("span").innerText = "Neklausote manęs";
});

//Labai blogas vartotojas
addEventListener("mousemove", (e) => {
  document.querySelector("h1.baduser").innerText = "Kiek galima neklausyti?!";
});

//``````````````````````````````````````````````

document.querySelector("button.hello").addEventListener("click", () => {
  const description = document.createElement("div");
  description.textContent = "Hello world";
  document.body.appendChild(description);
  description.addEventListener("click", () => {
    description.innerText = "";
  });
});
