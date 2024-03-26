//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 23 PAMOKA~~~~~~~~~~~~~~~~~~~~~~~~~~

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://polar-chartreuse-silverfish.glitch.me/")
    .then((response) => response.json())
    .then((data) => createTable(data))
    .catch((error) => console.error("Klaida:", error));
});

function createTable(data) {
  const tableBody = document
    .getElementById("data-table")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";

  data.forEach((item) => {
    const row = tableBody.insertRow();
    const cellId = row.insertCell();
    const cellImage = row.insertCell();
    const cellName = row.insertCell();
    const cellSurname = row.insertCell();
    const cellCity = row.insertCell();
    const cellFavColor = row.insertCell();

    cellId.innerHTML = item.id;

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = "Profile Image";
    cellImage.appendChild(img);

    const [name, surname] = item.name.split(" ");
    cellName.innerHTML = name;
    cellSurname.innerHTML = surname || "";

    cellCity.innerHTML = item.city;
    cellFavColor.innerHTML = item.fav_color;
  });
}

document.getElementById("vipFilter").addEventListener("change", (e) => {
  const isChecked = e.target.checked;
  fetch("https://polar-chartreuse-silverfish.glitch.me/")
    .then((response) => response.json())
    .then((data) => {
      const filteredData = isChecked ? data.filter((item) => item.vip) : data;
      createTable(filteredData);
    })
    .catch((error) => alert.error("Klaida:", error)); //alert
});

document.getElementById("searchBtn").addEventListener("click", () => {
  const searchQuery = document
    .getElementById("searchInput")
    .value.toLowerCase();
  fetch("https://polar-chartreuse-silverfish.glitch.me/")
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter((item) => {
        const [name, surname] = item.name.toLowerCase().split(" ");
        return name.includes(searchQuery) || surname.includes(searchQuery);
      });
      createTable(filteredData);
    })
    .catch((error) => alert.error("Klaida:", error));
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    24 Pamoka  ~~~~~~~~~~~~~~~~~~~~~~~
//BILIETAI

document.addEventListener("DOMContentLoaded", () => {
  const standardPrice = 6;
  const discountUnder16 = 0.5;
  const discountOver60 = 1 / 3;

  const ageInput = document.getElementById("ageInput");
  const priceOutput = document.getElementById("priceOutput");
  const calculatePriceBtn = document.getElementById("calculatePriceBtn");

  calculatePriceBtn.addEventListener("click", () => {
    const age = parseInt(ageInput.value);

    let finalPrice = standardPrice;

    if (age < 16) {
      finalPrice *= 1 - discountUnder16;
    } else if (age > 60) {
      finalPrice *= 1 - discountOver60;
    }

    priceOutput.innerText = `Bilieto kaina: ${finalPrice} EUR`;
  });
});

//TARNYBA

function checkData() {
  const age = document.getElementById("age").value;
  const hasCriminalRecord = document.querySelector(
    'input[name="criminalRecord"]:checked'
  ).value;

  if (age >= 18 && age <= 30 && hasCriminalRecord === "no") {
    resultText = "Karinė tarnyba privaloma.";
  } else {
    resultText = "Karinė tarnyba neprivaloma.";
  }

  document.getElementById("result").innerHTML = `<h1>${resultText}</h1>`;
}
