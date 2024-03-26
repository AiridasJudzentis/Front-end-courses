//PASKAITA

// function A(a) {

//   if (a > 100) {
//     console.log(a);
//   } else {
//     let result = B(a);
//     console.log(result);
//   }
// }
// function B(b) {
//   let result = b + 2;
//   return result;
// }

// A(122);

// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function getEven(array) {
//   for (let i = 0; i < array.length; i = i + 1) {
//     if (array[i] % 2 === 0) {
//       console.log(array[i]);
//     }
//   }
// }

// getEven(array1);
// getEven(array2);

//------------------------------------------------------------------------

// function convertMStoKMH(n) {
//   KMH = n * 3.6;
//   return KMH;
// }
// console.log(convertMStoKMH(20));

//------------------------------------------------------------------------

// function compareNumber(n1, n2) {
//   if (typeof n1 !== "number" || typeof n2 !== "number") {
//     console.log("Error: most arguments must be numbers");
//   }
//   if (n1 > n2) {
//     console.log(n1);
//   } else if (n1 < n2) {
//     console.log(n2);
//   } else {
//     console.log("Equal");
//   }
// }
// compareNumber("3", 2);

//------------------------------------------------------------------------

// function isLeapYear(year) {
//   if (year % 4 !== 0 || year % 100 == 0) {
//     console.log("false");
//   } else if (year % 4 === 0) {
//     console.log("true");
//   }
// }
// isLeapYear(2100);

//------------------------------------------------------------------------

// let array1 = [100, 2, 3, 50, 57, 4, 60, 72, 10];
// function findMaxInArray(array) {
//   let max = 0;
//   for (let i = 0; i < array1.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// console.log(findMaxInArray(array1));

//------------------------------------------------------------------------

// let array1 = [1, 2, 3, 50, 57, 4, 60, 72, 10];
// function sumArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
// console.log(sumArray(array1));

//------------------------------------------------------------------------

// let arr1 = [1, 2, 3, 50, 57, 4, 60, 72, 10];
// let arr2 = [1, 2, 3, 50, 57, 4, 50, 72, 20, 50];
// function arMasyvaiLygus(n1, n2) {
//   if (n1.length === n2.length) {
//     for (let i = 0; i < n1.length; i++) {
//       if (n1[i] == n2[i]) {
//         console.log("Lygūs");
//       } else {
//         console.log("Ne lygūs");
//       }
//     }
//   } else {
//     console.log("Ne lygūs");
//   }
// }
// arMasyvaiLygus(arr1, arr2);

//------------------------------------------------------------------------

// function reverseString(string) {
//   let reversed = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversed += string[i];
//   }
//   return reversed;
// }
// console.log(reverseString("Labas"));

//------------------------------------------------------------------------

// function arPalindromas(zodis) {
//   for (i = 0; i < zodis.length / 2; i++) {
//     if (zodis[i] !== zodis[zodis.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(arPalindromas("savas"));

//------------------------------------------------------------------------

// function printPyramid(aukstis) {
//   for (let i = 0; i <= aukstis; i++) {
//     let ilgis = "";
//     for (let j = 0; j < i; j++) {
//       ilgis += i;
//     }
//     console.log(ilgis);
//   }
// }
// printPyramid(8);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Parašyti fuknciją kuri konvertuotų reikšmę į Fahrenheitus arba Celcius nurodžius parametrą.
// Pvz: convertTemp(tempValue, unit);
// -> convertTemp(32, 'f') => 89.6

// function converter(tempValue, unit) {
//   if (unit === "f") {
//     temp = tempValue * (9 / 5) + 32;
//   }
//   if (unit === "c") {
//     temp = (tempValue - 32) * (5 / 9);
//   }
//   return temp;
// }
// console.log(converter(170, "c"));

//------------------------------------------------------------------------

// Apskaičiuoti pasikartojimus array elementus, nurodžius array per parametrus ir kokio pasikartojimo ieškome.
// Pvz: countOccurrances(arr, searching);
// - > countOccurances([3,2,3,3,5,3,2], 3) => 4

// function countOccurrances(arr, searching) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == searching) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countOccurrances([3, 2, 3, 3, 5, 3, 2], 3));

//------------------------------------------------------------------------

// Parašyti fuknciją kuri pakartotų tekstą kelis kartus.
// Pvz. repeatString(text, times);
// -> repeatString('hi', 4) -> 'hihihihi' */

// function repeatString(text, times) {
//   return text.repeat(times);
// }
// console.log(repeatString("hi", 3));

//------------------------------------------------------------------------ 10 JS PAMOKA-----------------------------------------------------------------

// function convertToUpperCase(word) {
//   let upWord = word.toUpperCase();
//   return upWord;
// }
// console.log(convertToUpperCase("labas"));

//------------------------------------------------------------------------

// function extractSubstring(word) {
//   extractWord = word.slice(2, 8);
//   return extractWord;
// }
// console.log(extractSubstring("Sveikas pasauli"));

//------------------------------------------------------------------------

// function capitalizeFirstLetter(sentence) {
//   const arr = sentence.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
//   }
//   return arr;
// }
// console.log(capitalizeFirstLetter("labas rytas, pasauli!"));

//------------------------------------------------------------------------

// function censorCurseWords(sentence, badWord) {
//   let text = sentence;
//   for (let i = 0; i < badWord.length; i++) {
//     const badWords = badWord[i];
//     if (text.includes(badWords)) {
//       text = text.replace(badWords, "****");
//     }
//   }
//   return text;
// }
// console.log(
//   censorCurseWords("This is a badword and another badword.", ["badword"])
// );

//------------------------------------------------------------------------

// const milkPrice = 3.49517487;
// {
//   if (Number.isInteger(milkPrice)) {
//     alert("Nereikės");
//   } else {
//     alert("Reikės");
//   }
// }
// console.log(milkPrice.toFixed(2));

//------------------------------------------------------------------------

// const isLegalAge = true;
// console.log(isLegalAge); // Atvaizduos kaip boolean
// console.log(isLegalAge.toString()); // Atvaizduos kaip string

//------------------------------------------------------------------------ 10 JS PAMOKA-----------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
// let number = prompt("Įveskite skaičių");

// function smallerNumber(arr, number) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < number) {
//       console.log(arr[i]);
//     }
//   }
// }
// console.log(smallerNumber(arr, number));

//Arrow
// const smallerNumber = (arr, number) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < number) {
//       console.log(arr[i]);
//     }
//   }
// };

// console.log(smallerNumber(arr, number));

//Callback funkcija

// function processArray(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }

// function createSmallerNumberFunc(number) {
//   return function (element) {
//     if (element < number) {
//       console.log(element);
//     }
//   };
// }

// let smallerNumberFunc = createSmallerNumberFunc(number);
// processArray(arr, smallerNumberFunc);

//------------------------------------------------------------------------

// let isExisting = false;
// function isThereNumber(arr, number) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == number) {
//       isExisting = true;
//       break;
//     } else {
//       isExisting = false;
//     }
//   }
//   return isExisting;
// }
// console.log(isThereNumber(arr, number));

//Arrow

// const isThereNumber = (arr, number) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == number) {
//       isExisting = true;
//       break;
//     } else {
//       isExisting = false;
//     }
//   }
//   return isExisting;
// };

// console.log(isThereNumber(arr, number));

//Callback funkcija

// function processArray(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       return true;
//     }
//   }
//   return false;
// }

// function createIsThereNumberFunc(number) {
//   return function (element) {
//     return element == number;
//   };
// }

// let isThereNumberFunc = createIsThereNumberFunc(number);
// let isExisting = processArray(arr, isThereNumberFunc);
// console.log(isExisting);

//------------------------------------------------------------------------

// let count = 0;
// function howMany(arr, number) {
//   for (let i = 0; i < arr.length; i++) {
//     if (number == arr[i]) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(howMany(arr, number));

//Arrow

// const howMany = (arr, number) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (number == arr[i]) {
//       count += 1;
//     }
//   }
//   return count;
// };

// console.log(howMany(arr, number));

//------------------------------------------------------------------------

// function myIndex(arr, number) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (number == arr[i]) {
//       return i;
//     }
//   }
// }
// console.log(myIndex(arr, number));

//Arrow

// const myIndex = (arr, number) => {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (number == arr[i]) {
//       return i;
//     }
//   }
// };

// console.log(myIndex(arr, number));

//------------------------------------------------------------------------ 11 JS PAMOKA-----------------------------------------------------------------

// Callback uzduotys\

// let alertName = (name) => {
//   alert(name);
// };

// let consoleName = (name) => {
//   console.log(name);
// };
// function coreFunction(name, callback) {
//   const capitalizedName =
//     name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//   callback(capitalizedName);
// }
// console.log(coreFunction("jonas", consoleName));

// bandyta su funkcija

//------------------------------------------------------------------------

// const cars = ["BMW", "VW", "Audi"];

// function printEvery(arr, callBack) {
//   let car = "";
//   for (let i = 0; i < arr.length; i++) {
//     console.log(i + ": " + arr[i]);
//   }
// }
// console.log(printEvery(cars));

// Methods;

// cars.forEach((v, i) => console.log(i + ": " + v));

//------------------------------------------------------------------------

// const names = ["peTras", "jonaS", "aNTanaS"];

// function getFirstLetter(arr, callBack) {
//   for (let i = 0; i < arr.length; i++) {
//     const transformedName = callBack(arr[i]);
//     console.log(transformedName);
//   }
// }

// function makeNameProper(name) {
//   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }
// getFirstLetter(names, makeNameProper);

// Methods

// const newNames = names.map(
//   (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
// );
// console.log(newNames);

//------------------------------------------------------------------------

// let age = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30,
// ];
// function findAge(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 17) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
// }
// findAge(age);

//Callbacks

// let age = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30,
// ];

// function isAdult(age) {
//   return age > 17;
// }

// function findAge(arr, callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
// }

// findAge(age, isAdult);

//Methods

// console.log(age.filter((x) => x >= 18));

//------------------------------------------------------------------------

//CALLBACK

// let city = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "panevėžys"];

//Ar prasideda K raide

// function findCity(cities, callback) {
//   for (let i = 0; i < cities.length; i++) {
//     if (callback(cities[i])) {
//       console.log(cities[i]);
//     }
//   }
// }

// findCity(city, startsWithLowerCase);

// function startsWithK(cityName) {
//   return cityName.charAt(0) === "K";
// }

//Ar prasideda mažaja raide

// function startsWithLowerCase(cityName) {
//   return cityName.charAt(0) === cityName.charAt(0).toLowerCase();
// }

//Ar visi prasideda didžiaja raide

// function startsWithLowerCase(cityName) {
//   return cityName.charAt(0) === cityName.charAt(0).toUpperCase();
// }

// //Methods

// console.log(city.find((v) => v.charAt(0) === "K"));

// console.log(city.some((v) => v.charAt(0) === v.charAt(0).toLowerCase()));
// console.log(city.every((v) => v.charAt(0) === v.charAt(0).toUpperCase()));
// //------------------------------------------------------------------------

// PAPILDOMA TOMO UŽDUOTIS

// const arrayOfNames =  [
//   'John Doe',
//   'Jane Smith',
//   'David Johnson',
//   'Emily',
//   'Michael Brown',
//   'Olivia',
//   'Christopher Wilson',
//   'Sophia Miller',
//   'Matthew Taylor',
//   'Ava'
// ];

// Sukurti fuknciją kuri ifltruotų vardus į dvi grupes - vardus su pavardėm ir vardus be pavardžių. Per antrą callback parametrą, baigus filtravimą grąžintų per du parametrus.
// PVZ:
// Šaukimas someFunction(arrayOfNames, (...) => console.log)

// Fukncijos aprašymas
// function someFunction(names, callbackFunction) {

//     // Logika

//     // Grąžinimas vardų grupių per du parametrus.

// }

// Paprasta funckija

// const arrayOfNames = [
//   "John Doe",
//   "Jane Smith",
//   "David Johnson",
//   "Emily",
//   "Michael Brown",
//   "Olivia",
//   "Christopher Wilson",
//   "Sophia Miller",
//   "Matthew Taylor",
//   "Ava",
// ];

// function divideNames(names) {
//   let withLastNames = [];
//   let withoutLastNames = [];

//   for (let i = 0; i < names.length; i++) {
//     if (names[i].includes(" ")) {
//       withLastNames.push(names[i]);
//     } else {
//       withoutLastNames.push(names[i]);
//     }
//   }

//   console.log("Names with Last Names:", withLastNames);
//   console.log("Names without Last Names:", withoutLastNames);
// }

// divideNames(arrayOfNames);

// const arrayOfNames = [
//   "John Doe",
//   "Jane Smith",
//   "David Johnson",
//   "Emily",
//   "Michael Brown",
//   "Olivia",
//   "Christopher Wilson",
//   "Sophia Miller",
//   "Matthew Taylor",
//   "Ava",
// ];

// let withLastNames = [];
// let withoutLastNames = [];
// function divideNames(names, callBack) {
//   for (let i = 0; i < names.length; i++) {
//     if (names[i].includes(" ")) {
//       withLastNames.push(names[i]);
//     } else {
//       withoutLastNames.push(names[i]);
//     }
//   }
//   callBack();
// }

// function consoleLog() {
//   console.log("Names with Last Names:", withLastNames);
//   console.log("Names without Last Names:", withoutLastNames);
// }

// divideNames(arrayOfNames, consoleLog);

// const array = ["andrius", "Abraomas", "benas", "Bonas"];

// let count = 0;

// for (let i = 0; i < array.length; i++) {
//   count += array[i].length;
// }

// console.log(count);

//Kiek skirtingų raidžių

// const array = ["andrius", "Abraomas", "benas", "Bonas"];

// let newArray = array.join("").toLowerCase();
// let uniqueLetters = [];

// for (let i = 0; i < newArray.length; i++) {
//   if (!uniqueLetters.includes(newArray[i])) {
//     uniqueLetters.push(newArray[i]);
//   }
// }
// console.log(uniqueLetters);

// -------------------------------------- 12 PAMOKA-------------------------------------------

//SORT

// const names = ["Zigmas", "Antanas", "Jonas", "Petras"];

// names.sort((a, b) => a.localeCompare(b));
// console.log(names);

// const array = [5, 10, 20, 11, 12, 1, 0, 14, 25];
// array.sort((a, b) => a - b);
// console.log(array);

// const newArray = [10, 5, 20, 4];
// newArray.sort((a, b) => b - a);
// console.log(newArray[0]);

//ARRAY REDUCE

// const people = [
//   {
//     name: "Petras",
//     age: "18",
//   },
//   {
//     name: "Jonas",
//     age: 15,
//   },
//   {
//     name: "Antanas",
//     age: 20,
//   },
//   {
//     name: "Urtė",
//     age: 10,
//   },
//   {
//     name: "Diana",
//     age: 25,
//   },
//   {
//     name: "Ieva",
//     age: 16,
//   },
// ];

//PILNAMEČIAI

// let legalAge = people.filter((people) => people.age >= 18);
// console.log(legalAge);

//TIK PILNAMEČIŲ VARDAI

// let onlyNames = people
//   .filter((people) => people.age >= 18)
//   .map((names) => names.name);
// console.log(onlyNames);

//TVARKA

// let onlyNames = people
//   .filter((people) => people.age >= 18)
//   .map((names) => names.name)
//   .sort((a, b) => a.localeCompare(b));
// console.log(onlyNames);

//PREKĖS

// const products = [
//   {
//     name: "lemonade",
//     price: 50,
//   },
//   {
//     name: "lime",
//     price: 10,
//   },
//   {
//     name: "meat",
//     price: 90,
//   },
//   {
//     name: "milk",
//     price: 70,
//   },
//   {
//     name: "cheese",
//     price: 80,
//   },
//   {
//     name: "water",
//     price: 5,
//   },
// ];

// function mostExpesniveAndCheap() {
//   let newArray = [];
//   let expensive = products
//     .sort((a, b) => b.price - a.price)
//     .map((newArray) => "brangiausias: " + newArray.name);
//   newArray.push(expensive[0]);
//   let cheap = products
//     .sort((a, b) => a.price - b.price)
//     .map((newArray) => "pigiausias: " + newArray.name);
//   newArray.push(cheap[0]);
//   console.log(newArray);
// }
// mostExpesniveAndCheap(products);

// -------------------------------------- 13 PAMOKA-------------------------------------------

//Elementų pridėjimas

// let array = [];

// function addElement() {
//   array.push(1, 2, 3);
//   console.log(array);
//   return array;
// }
// addElement(array);

//Sujunkite du masyvus į vieną

// let array = [1, 2, 3];
// let newArray = [4, 5, 6];
// let mergedArray = [];
// function mergeArrays(arr, arr2) {
//   mergedArray = [...arr, ...arr2];
//   console.log(mergedArray);
// }
// mergeArrays(array, newArray);

//Kelių elementų pridėjimas

// let array = [1, 2, 3];
// addedArray = [];
// function addMultipleElements(arr, pushed) {
//   addedArray = [...arr, ...pushed];
//   console.log(addedArray);
// }
// addMultipleElements(array, [4, 5, 6, 7]);

//Masyvo elementų modifikavimas

// let array = [1, 2, 3];
// function doubleNumbers() {
//   let newArray = array.map((newArray) => newArray * 2);
//   console.log(newArray);
// }

// doubleNumbers(array);

//Unikalūs elementai

// let array = [1, 1, 2, 2, 3, 4, 5, 6, 7];

// function findUnique(arr) {
//   let uniqueNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueNumbers.includes(arr[i])) {
//       uniqueNumbers.push(arr[i]);
//     }
//   }
//   console.log(uniqueNumbers);
// }

// findUnique(array);

//  !!!!!!!!!  Kelionės maršruto planavimas   !!!!!!!!!!!!!!!!!

// let array = [30, 70, 550];
// function planTrip(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   const goodWeight = sum <= 200;
//   console.log(goodWeight);
// }
// planTrip(array);

// const planTrip = (items) => ((acc, curr) => acc + curr, 0) <= 200;

// planTrip(array);

// const planTrips = (items) =>
//   items.reduce((total, item) => total + item, 0) <= 200;

// planTrips(array);

//Aptarnavimo eilės optimizavimas

// let orders = [
//   {
//     id: 1,
//     size: 5,
//   },
//   {
//     id: 2,
//     size: 3,
//   },
//   {
//     id: 3,
//     size: 8,
//   },
// ];
// function optimizeQueue(arr) {
//   let size = arr.sort((a, b) => a.size - b.size);
//   console.log(size);
// }
// optimizeQueue(orders);

//Dažniausiai pasikartojantis

// let array = [3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3];

// const findMostFrequent = (arr) => {
//   const counts = {};
//   let maxCount = 0;
//   let mostFrequent;

//   arr.forEach((item) => {
//     counts[item] = (counts[item] || 0) + 1;
//     if (counts[item] > maxCount) {
//       maxCount = counts[item];
//       mostFrequent = item;
//     }
//   });

//   return mostFrequent;
// };
// console.log(findMostFrequent(array));

// const array = [3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3];
// let maxCount = 0;
// let mostFrequent;
// const frequency = array.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   if (acc[curr] > maxCount) {
//     maxCount = acc[curr];
//     mostFrequent = curr;
//   }
//   return acc;
// }, {});
// console.log(mostFrequent);

//Rasti trūkstamą skaičių

// const findMissingNumber = (arr) => {
//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
//   return expectedSum - actualSum;
// };

// const findMissingArray2 = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr.indexOf(i) === -1) {
//       return i;
//     }
//   }
//   return 0;
// };
// console.log(findMissingArray2([1, 2, 3, 4, 5, 6, 7]));

// Šachmatų lenta

// const generateChessBoard = (size) => {
//   const board = [];
//   for (let i = 0; i < size; i++) {
//     const row = [];
//     for (let j = 0; j < size; j++) {
//       row.push((i + j) % 2 === 0 ? "W" : "B");
//     }
//     board.push(row);
//   }
//   return board;
// };

// -------------------------------------- 14 PAMOKA-------------------------------------------

//Asmuo
// const createPerson = {};
// const createPersons = Object.create(createPerson);
// createPersons.name = "Jonas";
// createPersons.lastName = "Jonaitis";
// createPersons.age = "30";
// console.log(createPersons);

//ATS
// const createPerson = (name, lastname, age) => {
//   return {
//     name,
//     lastname,
//     age,
//   };
// };

// console.log(createPerson("Jonas", "Jonaitis", 30)); // { name: "Jonas", lastname: "Jonaitis", age: 30 }

//Mašinos informacija

// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2023,
// };

// const printCarInfo = (car) => {
//   console.log(car);
// };
// printCarInfo(car);

//ATS
// const printCarInfo = (car) => {
//     return `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`;
// };
// console.log(printCarInfo({ brand: "Toyota", model: "Corolla", year: 2020 })); // "Brand: Toyota, Model: Corolla, Year: 2020"

//Darbuotojų ataskaita

// const printEmployeeInfo = (employees) => {
//   const names = Object.keys(employees);
//   names.forEach((name) => {
//     console.log(`Name: ${name}, Position: ${employees[name]}`);
//   });
// };
// printEmployeeInfo({ Jonas: "Engineer", Petras: "Manager" });

//Knygų paieška

// const surastiKnygasPagalPavadinima = (books, searchTerm) =>
//   books.filter((books) =>
//     books.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

// console.log(
//   surastiKnygasPagalPavadinima(
//     [
//       { title: "Haris Poteris ir išminties akmuo", author: "J.K. Rowling" },
//       { title: "Hobitas", author: "J.R.R. Tolkien" },
//     ],
//     "Poteris"
//   )
// );

//Studentų grupių balai

// const countAverages = (groups) => {
//   const createAverage = Object.create(countAverages);
//   for (const group in groups) {
//     const average =
//       groups[group].reduce((sum, score) => sum + score, 0) /
//       groups[group].length;
//     createAverage[group] = average;
//   }
//   return createAverage;
// };

// console.log(
//   countAverages({ "Group A": [80, 90, 100], "Group B": [70, 80, 90] })
// );
// { "Group A": 90, "Group B": 80 }

//Inventoriaus valdymas

// function updateInventory(inventory, actions) {
//   actions.forEach((action) => {
//     if (action.action === "add") {
//       inventory[action.item] = (inventory[action.item] || 0) + action.change;
//     } else if (action.action === "remove") {
//       inventory[action.item] = Math.max(
//         (inventory[action.item] || 0) - action.change,
//         0
//       );
//     }
//   });
//   return inventory;
// }

// console.log(
//   updateInventory({ apples: 5, bananas: 8 }, [
//     { item: "apples", change: 3, action: "add" },
//     { item: "bananas", change: 2, action: "remove" },
//   ])
// );
// { "apples": 8, "bananas": 6 }

// let obj = {
//   name: "John",
//   lastName: "Smith",
// };
// let lastName = "lastName";
// function b() {
//   console.log(obj[lastName]);
// }

// b();

// console.log("Hello world");

//Mašinos informacija

// function whichCar(brand, model, age, mileage, price) {
//   return {
//     brand: brand,
//     model: model,
//     age: age,
//     mileage: mileage,
//     price: price,
//     info: function () {
//       console.log(
//         this.brand + " " + this.model + " " + this.age + " " + this.mileage
//       );
//     },
//     newPrices: function (newPrice) {
//       this.price = newPrice;
//       console.log(whichCar);
//     },
//   };
// }
// let car = whichCar("Toyota", "Corolla", 10, 502402, 24000);
// whichCar(car.info());
// whichCar(car.newPrices(10));

//~~~~~~~~~~~~~~~~~~~~~~~~~PAVELO DUOTA UZD~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const carMarket = {
//   cars: [
//     { brand: "Toyota", model: "Camry", year: 2015, price: 15000 },
//     { brand: "Honda", model: "Accord", year: 2018, price: 20000 },
//     { brand: "Ford", model: "Mustang", year: 2020, price: 25000 },
//     { brand: "Audi", model: "A6", year: 2014, price: 30000 },
//     { brand: "BMW", model: "M4", year: 2019, price: 32000 },
//     { brand: "Toyota", model: "Corolla", year: 2023, price: 24000 },
//   ],

//   findCarByMinPrice: function (minPrice) {
//     return this.cars.filter(function (car) {
//       return car.price <= minPrice;
//     });
//   },

//   findCarByMaxPrice: function (maxPrice) {
//     return this.cars.filter(function (car) {
//       return car.price >= maxPrice;
//     });
//   },

//   findCarByMinYear: function (minYear) {
//     return this.cars.filter(function (car) {
//       return car.year >= minYear;
//     });
//   },

//   findCarByMaxYear: function (maxYear) {
//     return this.cars.filter(function (car) {
//       return car.year <= maxYear;
//     });
//   },

//   findCarByBrand: function (brand) {
//     return this.cars.filter(function (car) {
//       return car.brand === brand;
//     });
//   },

//   findCarByModel: function (model) {
//     return this.cars.filter(function (car) {
//       return car.model === model;
//     });
//   },

//   addCar: function () {},
//   sellCar: function () {},
// };

// console.log("Automoblių turgus prieš keitimus", carMarket.cars);

// console.log(
//   "Pigiausias automobilis (nuo 24000 eur): ",
//   carMarket.findCarByMinPrice(24000)
// );
// console.log(
//   "Brangiausias automobolis (iki 30000 eur):",
//   carMarket.findCarByMaxPrice(30000)
// );

// console.log("Automoblių turgus prieš keitimus", carMarket);

// console.log("Automobiliai nuo 2019 metų:", carMarket.findCarByMinYear(2019));

// console.log("Automobiliai iki 2020 metų:", carMarket.findCarByMaxYear(2020));

// console.log("Pagal markę (Toyota):", carMarket.findCarByBrand("Toyota"));

// console.log("Pagal modelį (Corolla):", carMarket.findCarByModel("Toyota"));

//~~~~~~~~~~~~~~~~~~~~~~~PREKIŲ KREPŠELIS~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function shoppingBasket() {
//   return {
//     basket: [],
//     basketPrice: 0,

//     addToBasket: function (item) {
//       this.basket.push(item);
//     },

//     removeFromBasket: function (itemName) {
//       this.basket = this.basket.filter((item) => item.name !== itemName);
//     },

//     calculateBasketPrice: function () {
//       this.basketPrice - 0;
//       this.basket.forEach((item) => (this.basketPrice += item.price));
//     },
//     getBasketPrice: function () {
//       return this.basketPrice;
//     },

//     getBasket: function () {
//       return this.basket;
//     },
//   };
// }

// const myBasket = shoppingBasket();

// const itemsToBuy = [
//   {
//     name: "Apple",
//     price: 0.5,
//   },
//   {
//     name: "Milk",
//     price: 1.5,
//   },
//   {
//     name: "Sugar",
//     price: 2.5,
//   },
//   {
//     name: "Bread",
//     price: 1.0,
//   },
//   {
//     name: "Butter",
//     price: 2.0,
//   },
// ];

// itemsToBuy.forEach((item) => {
//   myBasket.addToBasket(item);
// });

// myBasket.addToBasket({
//   name: "Sprite",
//   price: 3.0,
// });

// myBasket.removeFromBasket("Butter");

// console.log(
//   "Krepšelis: ",
//   myBasket.basket,
//   "Kaina:",
//   myBasket.calculateBasketPrice()
// );

function shoppingBasket() {
  return {
    basket: [],
    basketPrice: 0,

    addToBasket: function (item) {
      this.basket.push(item);
    },

    removeFromBasket: function (itemName) {
      this.basket = this.basket.filter((item) => item.name !== itemName);
    },

    calculateBasketPrice: function () {
      this.basketPrice = 0;
      this.basket.forEach((item) => (this.basketPrice += item.price));
    },
    getBasketPrice: function () {
      return this.basketPrice;
    },

    getBasket: function () {
      return this.basket;
    },
  };
}

const myBasket = shoppingBasket();

const itemsToBuy = [
  {
    name: "Apple",
    price: 0.5,
  },
  {
    name: "Milk",
    price: 1.5,
  },
  {
    name: "Sugar",
    price: 2.5,
  },
  {
    name: "Bread",
    price: 1.0,
  },
  {
    name: "Butter",
    price: 2.0,
  },
];

function storeVisitor(moneyParam) {
  const visitorBasket = shoppingBasket();
  return {
    basket: visitorBasket,
    inStore: false,
    payed: false,
    money: moneyParam,

    // Lankytojas ateina į parduotuvę
    enterStore: function () {
      this.inStore = true;
      console.log("Lankytojas atėjo į parduotuvę");
    },

    // Lankytojas pridėjo visas prekes į krepšelį
    addToBasket: function (item) {
      this.basket.addToBasket(item);
    },

    // Lankytojas pašalino prekę iš krepšelio nes prekė per brangi
    removeFromBasket: function (itemName) {
      this.basket.removeFromBasket(itemName);
      console.log(
        itemName +
          ". Lankytojas pašalino šią prekę iš krepšelio nes prekė per brangi"
      );
    },

    // Lankytojas apskaičiavo krepšelio kainą
    calculateBasketPrice: function () {
      this.basket.calculateBasketPrice();
      console.log("Lankytojas apskaičiavo krepšelio kainą: ");
    },

    // Lankytojas nusprendė keliauti namo su prekėmis ir atsiskaito už prekes
    pay: function () {
      this.calculateBasketPrice();
      this.money -= this.basket.getBasketPrice();
      this.payed = true;
      console.log("Įvyksta atsiskaitymas");
    },

    // Patikrina ar atsiskaityta
    getPayed: function () {
      return this.payed;
    },

    // Peržvelgia kiek pinigų liko kišenėje
    getMoney: function () {
      return this.money;
    },

    // Išėjo iš parduotuvės
    leaveStore: function () {
      this.inStore = false;
      console.log("Lankytojas išėjo iš parduotuvės");
    },
  };
}

/* Parašyti fukncionalumą, kad kodas suveiktų. */
const visitor = storeVisitor(50); // Sukuriam lankytoją su 50 pinigų
console.log(visitor);

visitor.enterStore(); // Lankytojas atėjo į parduotuvę

itemsToBuy.forEach((item) => visitor.addToBasket(item)); // Lankytojas pridėjo visas prekes į krepšelį
console.log("Lankytojas pridėjo visas prekes į krepšelį");
visitor.calculateBasketPrice(); // Lankytojas apskaičiavo krepšelio kainą

console.log("Peržiūri turinį", visitor.basket.getBasket()); // Peržvelgia krepšelio turinį

console.log("Peržvelgia kainą", visitor.basket.getBasketPrice()); // Paskaičiuoja krepšelio kainą

visitor.removeFromBasket("Apple"); // Lankytojas pašalino prekę iš krepšelio nes prekė per brangi

visitor.calculateBasketPrice(); // Lankytojas apskaičiavo krepšelio kainą

console.log("Peržiūri turinį", visitor.basket.getBasket()); // Peržvelgia krepšelio turinį

console.log("Peržvelgia kainą", visitor.basket.getBasketPrice()); // Paskaičiuoja krepšelio kainą

visitor.pay(); // Lankytojas nusprendė keliauti namo su prekėmis ir atsiskaito už prekes

console.log("Ar atsiskaitė?", visitor.getPayed()); // Patikrina ar atsiskaityta

console.log("Likutis", visitor.getMoney()); // Peržvelgia kiek pinigų liko kišenėje

visitor.leaveStore(); // Išėjo iš parduotuvės

// TODO: pažymėti, kad atėjo į parduotuvę
// TODO: pažymėti,  kad išėjo iš parduotuvės
// TODO: atsiskaityti už prekes
// TODO: grąžinti pinigus
// TODO: grąžinti ar yra parduotuvėje
// TODO: grąžinti ar atsiskaityta
// TODO: grąžinti krepšelį
// TODO: grąžinti krepšelio kainą
// TODO: pridėti prekę į krepšelį
// TODO: pašalinti prekę iš krepšelio
// TODO: apskaičiuoti krepšelio kainą
