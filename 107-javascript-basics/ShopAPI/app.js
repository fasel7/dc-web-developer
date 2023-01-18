const postsContainer = document.getElementById("products-container");
const title = document.getElementById("product-title");
const productCategory = document.getElementById("product-category");
const productImages = document.getElementById("product-images");
const productPrice = document.getElementById("product-price");
const availableProducts = document.getElementById("available-products");
const productDescription = document.getElementById("description");

function fetchPostsWithFetchAPI() {
  fetch("https://dummyjson.com/products?limit=1000&select=title,thumbnail")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.products.forEach((product) => {
        console.log(product);
        createProductCardInList(product);
      });
    });
}

function createProductCardInList(product) {
  let productList = document.createElement("li");
  productList.addEventListener("click", () => {
    showProductDetail(product.id);
  });
  productList.setAttribute("class", "box");
  productList.setAttribute("id", product.id);
  let productImage = document.createElement("img");
  productImage.setAttribute("class", "product-img");
  productImage.src = product.thumbnail;
  let productTitle = document.createElement("h3");
  productTitle.innerText = product.title;
  productList.append(productImage);
  productList.append(productTitle);
  postsContainer.append(productList);
}

fetchPostsWithFetchAPI();

function showProductDetail(id) {
  fetch("https://dummyjson.com/products/" + id)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      title.innerText = data.title;
      productCategory.innerText = data.category;
      productPrice.innerText = data.price;
      availableProducts.innerText = data.stock;
      productDescription.innerText = data.description;
      showProductImages(data);
    });
}

function showProductImages(data) {
  productImages.innerHTML = "";
  data.images.forEach((image) => {
    let img = document.createElement("img");
    img.setAttribute("class", "product-images");
    img.src = image;
    console.log(img);
    productImages.append(img);
  });
}
