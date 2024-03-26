// let i = 0;
// while (i < 3) {
//   console.log("Airidas");
//   i++;
// }

//----------------------------------------

// let combo = "";
// const name = "Airidas";
// let time = 2;

// do {
//   combo += name;
//   time--;
// } while (time > 0);
// console.log(combo);

//----------------------------------------

// function getCircleX(radians, radius) {
//   return Math.cos(radians) * radius;
// }

// console.log(getCircleX(0, 10));

//----------------------------------------

// const random1 = Math.floor(Math.random() * 5) + 1;
// const random2 = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
// console.log(random1);
// console.log(random2);

//----------------------------------------

// const randomNumber = Math.floor(Math.random() * 5) + 1;
// if (randomNumber === 5) {
//   alert("You won");
// } else {
//   alert("Try again next time");
// }

//----------------------------------------

let myNewH2 = document.createElement("h2");
myNewH2.textContent = "Airidas";
document.body.append(myNewH2);
console.log(myNewH2);

let myNewH1 = document.getElementById("name");
myNewH1.textContent = "Airidas";
//------------------
let myNewLi = document.querySelector("ul li:nth-child(3)");
myNewLi.textContent = "Sūris";
//------------------
document.querySelector(".bluetext > span").textContent = "blue";
//------------------
const firstListItem = document.querySelector("li:first-child");
const secondListItem = document.querySelector("li:nth-child(2)");

const bmw_group = firstListItem.textContent;
const vw_group = secondListItem.textContent;

firstListItem.textContent = vw_group;
secondListItem.textContent = bmw_group;
