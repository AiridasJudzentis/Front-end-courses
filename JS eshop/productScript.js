window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  fetch(`https://dummyjson.com/products/${productId}`)
    .then((response) => response.json())
    .then((product) => {
      const thumbnailsDiv = document.getElementById("thumbnails");
      const mainPhotoDiv = document.getElementById("mainPhoto");
      const productInfoDiv = document.getElementById("productInfo");

      const discountedPrice =
        product.price -
        (product.price * (product.discountPercentage / 100)).toFixed(2);

      product.images.forEach((image, index) => {
        let imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = `Product Image ${index + 1}`;
        imgElement.onclick = () =>
          (mainPhotoDiv.innerHTML = `<img src="${image}" alt="Product Image">`);
        thumbnailsDiv.appendChild(imgElement);
      });

      mainPhotoDiv.innerHTML = `<img src="${product.images[0]}" alt="Main Product Image">`;

      productInfoDiv.innerHTML = `
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p class="price">Price: $${product.price}</p>
        <p class="discounted-price">Discounted Price: $${discountedPrice}</p>
        <p>Rating: ${product.rating} / 5</p>
        <p>Stock: ${product.stock} units</p>
        <p>Brand: ${product.brand}</p>
        <p>Category: ${product.category}</p>
      `;
    });
};
