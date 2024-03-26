document.addEventListener("DOMContentLoaded", () => {
  fetchProperties();
  setupCityFilterButtons();
});

function fetchProperties(city = "") {
  fetch("https://robust-safe-crafter.glitch.me/") // Assuming all properties are fetched from this endpoint
    .then((response) => response.json())
    .then((properties) => {
      const filteredProperties = city
        ? properties.filter((property) => property.city === city)
        : properties;

      const propertyContainer = document.querySelector(".row");
      propertyContainer.innerHTML = ""; // Clear existing properties
      filteredProperties.forEach((property) => {
        const propertyCard = createPropertyCard(property);
        propertyContainer.appendChild(propertyCard);
      });
    })
    .catch((error) => console.error("Error:", error));
}

function setupCityFilterButtons() {
  document.querySelectorAll("[data-city]").forEach((button) => {
    button.addEventListener("click", function () {
      const city = this.getAttribute("data-city");
      fetchProperties(city);

      // Update button styles to reflect the current filter
      document
        .querySelectorAll("[data-city]")
        .forEach((btn) =>
          btn.classList.replace("btn-outline-success", "btn-outline-secondary")
        );
      this.classList.replace("btn-outline-secondary", "btn-outline-success");
    });
  });
}

function createPropertyCard(property) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-4";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.style = "width: 18rem";

  const img = document.createElement("img");
  img.src = property.image;
  img.className = "card-img-top h-75";
  img.style = "max-height: 170px;";
  img.alt = "Property image";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.style = "min-height: 300px;";

  const price = document.createElement("h5");
  price.className = "card-title";
  price.textContent = property.price;

  const city = document.createElement("p");
  city.className = "card-text";
  city.textContent = property.city;

  const description = document.createElement("p");
  description.className = "card-text";
  description.textContent = property.description;

  cardBody.appendChild(price);
  cardBody.appendChild(city);
  cardBody.appendChild(description);

  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBody);
  colDiv.appendChild(cardDiv);

  return colDiv;
}

document.querySelector(".btn.btn-success").addEventListener("click", () => {
  window.location.href = "add.html";
});
