// let age = prompt("Įveskite savo amžių");
// let name = prompt("Įveskite savo vardą");

// let text = age > 18 ? "Sveiki, " + name : "Tu, " + name + " esi per jaunas";
// alert(text);

// if (age >= 18) {
//   alert("Sveiki " + String(name));
// } else if (age < 18) {
//   alert("Tu,  " + String(name) + " esi per jaunas");
// }
//-------------------------------------

// let car = "Toyota";
// if (
//   car == "VW" ||
//   car == "Audi" ||
//   car == "Bentley" ||
//   car == "Bugatti" ||
//   car == "Lamborghini" ||
//   car == "Porche"
// ) {
//   alert("Priklauso VW grupei");
// } else if (car == "BMW" || car == "Mini" || car == "Rolls-Royce") {
//   alert("Priklauso BMW grupei");
// } else {
//   alert("Nepriklauso nei vienai grupei");
// }

// ------------------  Pamoka 3

// let age = 27;
// let birthDate = 2023 - age;
// console.log(birthDate);

//--------------------------------------------------------

// let car = prompt("Įveskite automobilį");

// switch (car) {
//   case "VW":
//   case "Audi":
//   case "Bentley":
//   case "Bugatti":
//   case "Lamborghini":
//   case "Porche":
//     alert("Priklauso VW grupei");
//     break;

//   case "BMW":
//   case "Mini":
//   case "Rolls-Royce":
//     alert("Priklauso BMW grupei");
//     break;

//   default:
//     alert("Priklauso kitai atumobilių grupei");
// }

//--------------------------------------------------------

// let vegFru = prompt("Įveskite vaisių arba daržovę");
// switch (vegFru) {
//   case "Agurkas":
//     alert("Daržovė");
//     break;
//   case "Pomidoras":
//     alert("Daržovė");
//     break;
//   case "Svogūnas":
//     alert("Daržovė");
//     break;
//   case "Ropė":
//     alert("Daržovė");
//     break;
//   case "Kopūstas":
//     alert("Daržovė");
//     break;
//   case "Mandarinas":
//     alert("Vaisius");
//     break;
//   case "Obuolys":
//     alert("Vaisius");
//     break;
//   case "Vynuogė":
//     alert("Vaisius");
//     break;
//   case "Kriaušė":
//     alert("Vaisius");
//     break;
//   case "Persikas":
//     alert("Vaisius");
//     break;
//   default:
//     alert("Nėra duomenų");
// }

//--------------------------------------------------------

// let number = prompt("Įveskite skaičių nuo 0 iki 6");
// switch (number) {
//   case "0":
//     alert("Pirmadienis");
//     break;

//   case "1":
//     alert("Antradienis");
//     break;

//   case "2":
//     alert("Trečiadienis");
//     break;

//   case "3":
//     alert("Ketvirtadienis");
//     break;

//   case "4":
//     alert("Penktadienis");
//     break;

//   case "5":
//     alert("Šeštadienis");
//     break;

//   case "6":
//     alert("Sekmadienis");
//     break;
// }

//--------------------------------------------------------
// let phone = prompt("Ar tai iPhone");
// const isIphoneUser = phone === "iPhone";
// alert(isIphoneUser);

//--------------------------------------------------------

// for (let i = 0; i < 10; i++) {
//   console.log(i + ". " + "Airidas");
// }

//--------------------------------------------------------

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
