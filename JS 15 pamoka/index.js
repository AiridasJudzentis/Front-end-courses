// class Car {
//   constructor(brand, model, engine, engineType, basePrice) {
//     this.brand = brand;
//     this.model = model;
//     this.engine = engine;
//     this.engineType = engineType;
//     this.basePrice = basePrice;
//   }
//   turnOn() {
//     console.log("Vroom!");
//   }
//   getPrice() {
//     let addPrice = 0;
//     if (this.engineType.toLowerCase() === "electric") {
//       addPrice = 10000;
//     } else if (this.engineType.toLowerCase() === "diesel") {
//       addPrice = 5000;
//     } else this.engineType.toLowerCase() === "petrol";
//     return this.basePrice + addPrice;
//   }
// }
// const car = new Car("Toyota", "Corolla", "1.8L", "Electric", 10000);
// const car2 = new Car("BMW", "X5", "3.0L", "Diesel", 20000);
// const car3 = new Car("Audi", "S6", "4.0L", "Petrol", 30000);

// console.log(
//   car.brand + " " + car.model + " automobilio kaina: " + car.getPrice()
// );
// console.log(
//   car2.brand + " " + car2.model + " automobilio kaina: " + car2.getPrice()
// );
// console.log(
//   car3.brand + " " + car3.model + " automobilio kaina: " + car3.getPrice()
// );

// car.turnOn();
// car2.turnOn();

///////////////////////// BANKO SĄSKAITOS KLASĖ

// class BankAccount {
//   constructor(ownerName, balance) {
//     this.ownerName = ownerName;
//     this.balance = balance;
//   }
//   deposit(depositAmount) {
//     this.balance += depositAmount;
//     return this.balance;
//   }
//   withdraw(withdrawAmount) {
//     this.balance -= withdrawAmount;
//     return this.balance;
//   }
// }

// const bankAccount = new BankAccount("Jonas", "10000");

// console.log("Banko sąskaita po pinigų įnešimo: " + bankAccount.deposit(1000));
// console.log("Banko sąskaita po pinigų išėmimo: " + bankAccount.withdraw(300));
// console.log("Galutinė banko sąskaita: " + bankAccount.balance);

///////////////////////// Transporto priemonių paveldėjimas

// class Vehicle {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
//   information() {
//     return `Brand: ${this.brand}, Model: ${this.model}`;
//   }
// }

// class Car extends Vehicle {
//   constructor(brand, model, engineType) {
//     super(brand, model);
//     this.engineType = engineType;
//   }
//   information() {
//     console.log(
//       `Markė: ${car.brand}, modelis: ${car.model}, variklio tipas: ${car.engineType}`
//     );
//   }
// }
// class Bicycle extends Vehicle {
//   constructor(brand, model, hasEngine = false) {
//     super(brand, model);
//     this.hasEngine = hasEngine;
//   }
//   information() {
//     console.log(
//       `Markė: ${bicycle.brand}, modelis: ${bicycle.model}, ar turi variklį: ${bicycle.hasEngine}`
//     );
//   }
// }

// const car = new Car("Toyota", "Corolla", "Petrol");
// console.log(car.information());

// const bicycle = new Bicycle("Trek", "Marlin", true);
// console.log(bicycle.information());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~16 PAMOKA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

////////////////////////////////////Knygos klasė

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSummary() {
//     return `${this.title} by ${this.author} published in ${this.year}`;
//   }
// }
// const book = new Book("Book Title", "Author Name", "2023");
// console.log(book.getSummary());

////////////////////////////////////Muzikos studentas

// class MusicStudent {
//   constructor(name, instrument, level = "beginner") {
//     this.name = name;
//     this.instrument = instrument;
//     this.level = level;
//   }
//   practise() {
//     if (this.level === "beginner") {
//       this.level = "intermediate";
//     } else if (this.level === "intermediate") {
//       this.level = "advanced";
//     }
//   }
// }

// const student = new MusicStudent("Anna", "piano", "beginner");
// student.practise();
// console.log(
//   `${student.name} playing ${student.instrument} and her/his level ${student.level}`
// );

////////////////////////////////////Muzikos studentas

// class ShoppingCart {
//   constructor() {
//     this.items = [];
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(itemName) {
//     this.items = this.items.filter((item) => item.name !== itemName);
//   }
//   calculateTotal() {
//     return this.items.reduce((total, item) => total + item.price, 0);
//   }
// }
// const cart = new ShoppingCart();
// cart.addItem({ name: "Apple", price: 0.99 });
// cart.addItem({ name: "Bread", price: 1.29 });
// console.log(cart.calculateTotal()); // 2.28
// cart.removeItem("Apple");
// console.log(cart.calculateTotal()); // 1.29

////////////////////////////////////Kino teatro vietų rezervavimas

// class MovieTheater {
//   constructor(rows, seatsPerRow) {
//     this.rows = rows;
//     this.seatsPerRow = seatsPerRow;
//     this.seating = Array.from({ length: rows }, () =>
//       Array(seatsPerRow).fill(false)
//     );
//   }

//   bookSeat(row, seat) {
//     if (this.seating[row - 1][seat - 1]) {
//       return "Ši vieta jau užimta.";
//     } else {
//       this.seating[row - 1][seat - 1] = true;
//       return "Vieta sėkmingai rezervuota.";
//     }
//   }

//   cancelBooking(row, seat) {
//     if (this.seating[row - 1][seat - 1]) {
//       this.seating[row - 1][seat - 1] = false;
//       return "Rezervacija atšaukta.";
//     } else {
//       return "Ši vieta nebuvo rezervuota.";
//     }
//   }

//   checkAvailability(row, seat) {
//     return !this.seating[row - 1][seat - 1];
//   }
// }

// const theater = new MovieTheater(5, 5);
// console.log(theater.seating);
// console.log(theater.bookSeat(2, 3)); // Jei vieta laisva, rezervuos ir išves pranešimą apie sėkmingą rezervaciją

// console.log(theater.checkAvailability(2, 3)); // false, nes vieta užimta
// console.log(theater.cancelBooking(2, 3)); // Atšaukia rezervaciją ir išveda atitinkamą pranešimą
// console.log(theater.checkAvailability(2, 3)); // true, nes vieta vėl laisva

////////////////////////////////////Bibliotekos Valdymo Sistema

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSummary() {
//     return `${this.title} by ${this.author} published in ${this.year}`;
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//     this.lentBooks = new Map();
//   }

//   addBook(book) {
//     this.books.push(book);
//   }

//   lendBook(bookTitle, userName) {
//     const book = this.books.find((book) => book.title === bookTitle);
//     if (book) {
//       this.lentBooks.set(bookTitle, userName);
//       console.log(`${bookTitle} has been lent to ${userName}.`);
//     } else {
//       console.log(`${bookTitle} is not available.`);
//     }
//   }

//   returnBook(bookTitle) {
//     const book = this.books.find((book) => book.title === bookTitle);
//     if (book) {
//       this.lentBooks.delete(bookTitle);
//       console.log(`${bookTitle} has been returned.`);
//     } else {
//       console.log(`${bookTitle} is not recognized as lent.`);
//     }
//   }

//   listAvailableBooks() {
//     this.books.forEach((book) => {
//       if (book) {
//         console.log(
//           `${book.title} by ${book.author} published in ${book.year}`
//         );
//       }
//     });
//   }
// }

// const library = new Library();
// library.addBook(new Book("Book1", "Author1", "2020"));
// library.addBook(new Book("Book2", "Author2", "2021"));

// library.lendBook("Book1", "User1");
// library.listAvailableBooks(); // Expected: "Book2 by Author2 published in 2021"

// library.returnBook("Book1");
// library.listAvailableBooks(); // Expected: "Book2 by Author2 published in 2021" and "Book1 by Author1 published in 2020"

////////////////////////////////////DOM

// const people = [
//   { name: "Jonas ", lastname: "Jonaitis" },
//   { name: "Petras", lastname: "Petraitis" },
//   { name: "Antanas", lastname: "Antanaitis" },
// ];
// people.forEach((person) => {
//   const ul = document.createElement("ul");
//   const li = document.createElement("li");
//   li.textContent = `${person.name} ${person.lastname}`;
//   ul.appendChild(li);
//   document.body.appendChild(ul);
// });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~17 PAMOKMA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Teksto elemento kūrimas

// function createTextElement(text) {
//   const p = document.createElement("p");
//   p.textContent = text;
//   document.body.appendChild(p);
//   return p;
// }

// createTextElement("Labas, pasauli!");

//Elemento atnaujinimas  ??

// document.getElementById("name").textContent = "Airidas";

//Klaida DOM’e   ??
// document.querySelector(".bluetext span").textContent = "blue";

//Automobilių gamintojų sąrašas

// document.addEventListener("DOMContentLoaded", function () {
//   const list = document.getElementById("companyList");

//   const firstItemText = list.children[0].textContent;
//   const secondItemText = list.children[1].textContent;

//   list.children[0].textContent = secondItemText;
//   list.children[1].textContent = firstItemText;
// });

// //Prekių sąrašas

// function createList(itemsArray) {
//   const ulElement = document.createElement("ul");

//   itemsArray.forEach((item) => {
//     const liElement = document.createElement("li");
//     liElement.textContent = item;
//     ulElement.appendChild(liElement);
//   });

//   return ulElement;
// }
// document.body.appendChild(createList(["Pienas", "Duona", "Kiaušiniai"]));

//Tic-Tac-Toe laimėtojo nustatymas

document.addEventListener("DOMContentLoaded", highlightWinner);

function highlightWinner() {
  const board = document.querySelectorAll("#tictactoe tr");
  const matrix = Array.from(board, (row) =>
    Array.from(row.cells, (cell) => cell.textContent)
  );

  function checkAndHighlight(cells, indices) {
    if (cells[0] !== "" && new Set(cells).size === 1) {
      indices.forEach(
        ([row, col]) =>
          (board[row].cells[col].style.backgroundColor = "lightgreen")
      );
      return true;
    }
    return false;
  }

  for (let i = 0; i < 3; i++) {
    const row = matrix[i];
    const col = matrix.map((row) => row[i]);

    if (
      checkAndHighlight(row, [
        [i, 0],
        [i, 1],
        [i, 2],
      ])
    )
      return;
    if (
      checkAndHighlight(col, [
        [0, i],
        [1, i],
        [2, i],
      ])
    )
      return;
  }

  const diag1 = [matrix[0][0], matrix[1][1], matrix[2][2]];
  const diag2 = [matrix[0][2], matrix[1][1], matrix[2][0]];

  if (
    checkAndHighlight(diag1, [
      [0, 0],
      [1, 1],
      [2, 2],
    ])
  )
    return;
  if (
    checkAndHighlight(diag2, [
      [0, 2],
      [1, 1],
      [2, 0],
    ])
  )
    return;
}

highlightWinner();

// function highlightWinner() {
//   const table = document.getElementById("tictactoe");
//   const size = 3;
//   let winnerFound = false;

//   function checkSequence(sequence) {
//     if (
//       sequence.every(
//         (cell) =>
//           cell.textContent === sequence[0].textContent &&
//           cell.textContent !== ""
//       )
//     ) {
//       sequence.forEach((cell) => (cell.style.backgroundColor = "lightgreen"));
//       winnerFound = true;
//     }
//   }

//   for (let i = 0; i < size; i++) {
//     const row = Array.from(table.rows[i].cells);
//     const col = Array.from({ length: size }, (_, k) => table.rows[k].cells[i]);
//     checkSequence(row);
//     checkSequence(col);
//   }

//   const diag1 = Array.from({ length: size }, (_, i) => table.rows[i].cells[i]);
//   const diag2 = Array.from(
//     { length: size },
//     (_, i) => table.rows[i].cells[size - 1 - i]
//   );
//   checkSequence(diag1);
//   checkSequence(diag2);

//   if (!winnerFound) {
//     console.log("No winner found.");
//   }
// }

// highlightWinner();
