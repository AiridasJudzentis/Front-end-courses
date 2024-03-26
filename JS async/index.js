// async function fetchUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     createTableAndShowMore(users);
//   } catch (e) {
//     console.log(e);
//   }
// }

// function createTableAndShowMore(users) {
//   const tableContainer = document.getElementById("tableContainer");

//   const table = document.createElement("table");
//   const thead = document.createElement("thead");
//   const tbody = document.createElement("tbody");
//   table.appendChild(thead);
//   table.appendChild(tbody);

//   const headers = ["User", "Name", "Username", "Email"];
//   const headerRow = thead.insertRow();
//   headers.forEach((text) => {
//     let header = document.createElement("th");
//     header.textContent = text;
//     headerRow.appendChild(header);
//   });

//   const fillRows = (usersSlice, start = 0) => {
//     usersSlice.forEach((user, index) => {
//       let row = tbody.insertRow();
//       row.insertCell().appendChild(document.createTextNode(start + index + 1));
//       row.insertCell().appendChild(document.createTextNode(user.name));
//       row.insertCell().appendChild(document.createTextNode(user.username));
//       row.insertCell().appendChild(document.createTextNode(user.email));
//     });
//   };

//   fillRows(users.slice(0, 5));

//   if (users.length > 5) {
//     const showMoreButton = document.createElement("button");
//     showMoreButton.textContent = "Show more";
//     showMoreButton.onclick = () => {
//       fillRows(users.slice(5), 5);
//       showMoreButton.remove();
//     };
//     setTimeout(() => tableContainer.appendChild(showMoreButton), 0);
//   }

//   tableContainer.appendChild(table);
// }

// fetchUsers();

//~~~~~~~~~~~~~~~~~~~~~~~~~20 Pamoka ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = Math.floor(Math.random() * 5) + 1;

//     if (randomNumber == 1) {
//       reject("It did not work");
//     } else {
//       resolve("Yes, it works");
//     }
//   }, 1000);
// });

// promise
//   .then(() => {
//     return "This is a message";
//   })
//   .then((successMessage) => {
//     alert(successMessage);
//   })
//   .catch((errorMessage) => {
//     alert(errorMessage);
//   });

//~~~~~~~~~~~~~~~~~~~~~~~~~21 Pamoka ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      displayUserData(data.results[0]);
    })
    .catch((e) => {
      console.error(e);
    });
});

function displayUserData(user) {
  const userContainer = document.getElementById("userContainer");

  const img = document.createElement("img");
  const name = document.createElement("p");
  const age = document.createElement("p");
  const email = document.createElement("p");

  img.src = user.picture.large;
  name.textContent = `Name: ${user.name.first} ${user.name.last}`;
  age.textContent = `Age: ${user.dob.age}`;
  email.textContent = `Email: ${user.email}`;

  userContainer.appendChild(img);
  userContainer.appendChild(name);
  userContainer.appendChild(age);
  userContainer.appendChild(email);
}

//``````````````````````````````````

// fetch("https://party-wedding.glitch.me/v1/party")
//   .then((response) => response.json())
//   .then((data) => {
//     const isVip = data
//       .filter((guest) => guest.name === "Kristupas Lapeika")
//       .some((guest) => guest.vip === true);

//     console.log(isVip);
//   })
//   .catch((error) => {
//     console.error("Error fetching or processing data:", error);
//   });

//``````````````````````````````````

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://party-wedding.glitch.me/v1/wedding")
    .then((response) => response.json())
    .then((guestList) => {
      populateTable(guestList);
    })
    .catch((error) => {
      console.error("Error fetching guest list:", error);
    });
});

function populateTable(guestList) {
  const tableBody = document.querySelector("#weddingTable tbody");

  guestList.forEach((guest) => {
    const row = tableBody.insertRow();

    const nameCell = row.insertCell();
    nameCell.textContent = guest.name;

    const plusOneCell = row.insertCell();
    plusOneCell.textContent = guest.plusOne ? "+" : "-";

    const attendingCell = row.insertCell();
    attendingCell.textContent = guest.attending ? "+" : "-";
  });
}
