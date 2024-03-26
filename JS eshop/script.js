let currentPage = 1;
const productsPerPage = 15;
let selectedCategory = "";
let searchQuery = "";

function fetchProducts(page) {
  const skip = (page - 1) * productsPerPage;
  let url = `https://dummyjson.com/products?skip=${skip}&limit=${productsPerPage}`;

  if (selectedCategory && !searchQuery) {
    url = `https://dummyjson.com/products/category/${encodeURIComponent(
      selectedCategory
    )}?skip=${skip}&limit=${productsPerPage}`;
  } else if (searchQuery) {
    url = `https://dummyjson.com/products/search?q=${encodeURIComponent(
      searchQuery
    )}&skip=${skip}&limit=${productsPerPage}`;
  }

  history.pushState(
    {},
    "",
    `?category=${selectedCategory}&skip=${skip}&search=${encodeURIComponent(
      searchQuery
    )}`
  );
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const products = data.products || data;
      displayProducts(products);
      updateCurrentPageDisplay();
      document.getElementById("nextPage").disabled =
        products.length < productsPerPage;
    })
    .catch((error) => console.error("Error fetching products: ", error));
}

function fetchCategories() {
  fetch("https://dummyjson.com/products/categories")
    .then((response) => response.json())
    .then((categories) => {
      const categorySelect = document.getElementById("categorySelect");
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.innerText = category.charAt(0).toUpperCase() + category.slice(1);
        categorySelect.appendChild(option);
      });
    })
    .catch((error) => console.error("Klaida gautant kategorijas: ", error));
}

document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchQuery = this.value;
      currentPage = 1;
      fetchProducts(currentPage);
    }
  });

document.getElementById("searchInput").addEventListener("input", function (e) {
  if (this.value === "") {
    searchQuery = "";
    currentPage = 1;
    fetchProducts(currentPage);
  }
});

document.getElementById("searchButton").addEventListener("click", function () {
  searchQuery = document.getElementById("searchInput").value;
  currentPage = 1;
  fetchProducts(currentPage);
});

document
  .getElementById("categorySelect")
  .addEventListener("change", function (e) {
    selectedCategory = e.target.value;
    currentPage = 1;
    fetchProducts(currentPage);
  });

function displayProducts(products) {
  const productsContainer = document.getElementById("productsContainer");
  productsContainer.innerHTML = products
    .map(
      (product) => `
    <div class="product-item">
        <div>
        <img class="product-image" src="${product.thumbnail}" alt="${
        product.title
      }">
        
        
        <p class="product-category">Category - ${product.category}</p>
        <h3 class="product-title"><a href="javascript:void(0);" onclick="redirectToProductPage(${
          product.id
        })" class="product-link">${product.title}</a></h3>
        <p>${product.description.substring(0, 100)}...</p>
        <p class="product-price">$${product.price}</p>
        </div>
        <div>
        <button class="add-cart">Add to cart </button>
        </div>
    </div>
  `
    )
    .join("");
}
function redirectToProductPage(productId) {
  window.location.href = `product.html?id=${productId}`;
}
function updateCurrentPageDisplay() {
  document.getElementById("currentPage").innerText = `Puslapis: ${currentPage}`;
}

function goToFirstPage() {
  currentPage = 1;
  fetchProducts(currentPage);
  updateCurrentPageDisplay();
}

document.getElementById("firstPage").addEventListener("click", goToFirstPage);

document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchProducts(currentPage);
    updateCurrentPageDisplay();
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  currentPage++;
  fetchProducts(currentPage);
  updateCurrentPageDisplay();
});

function setPageFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const skip = parseInt(params.get("skip"), 10);
  const category = params.get("category");
  const search = params.get("search");

  if (category) {
    selectedCategory = category;
    document.getElementById("categorySelect").value = category;
  }
  if (search) {
    searchQuery = search;
    document.getElementById("searchInput").value = search;
  }

  currentPage = Math.floor(skip / productsPerPage) + 1 || 1;
  fetchProducts(currentPage);
  updateCurrentPageDisplay();
}

setPageFromUrl();
fetchCategories();
