const postsContainer = document.getElementById("products-container");
const title = document.getElementById("product-title");
const productCategory = document.getElementById("product-category");
const productImages = document.getElementById("product-images");
const productPrice = document.getElementById("product-price");
const discountPrice = document.getElementById("discount-price");
const discountPercentage = document.getElementById("discount-percentage");
const availableProducts = document.getElementById("available-products");
const productDescription = document.getElementById("description");
const filterCategories = document.querySelector(".filter-box");
const productsAmount = document.querySelector("h2");
const filterBtn = document.getElementById("filter-btn");
filterBtn.addEventListener("click", () => {
  const selectedCategory = filterCategories.value;
  fetchPostsWithFetchAPI(selectedCategory);
});
const searchBox = document.getElementById("search-input");
searchBox.addEventListener("input", () => fetchPostsWithFetchAPI("All", searchBox.value));

function fetchPostsWithFetchAPI(category = "All", search = "") {
  let query = "";

  if (category != "All") {
    //category selected
    query = `/category/${category}`;
  } else {
    if (search == "") {
      query = "?limit=1000&select=title,thumbnail";
    } else {
      query = `/search?q=${search}`;
    }
  }

  let url = `https://dummyjson.com/products${query}`;
  postsContainer.innerHTML = "loading";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      productsAmount.innerText = "Products(" + data.limit + ")";
      postsContainer.innerHTML = "";
      data.products.forEach((product) => {
        console.log(product);
        createProductCardInList(product);
      });
      getProductCategories();
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
      productPrice.innerText = data.price + "€ ";
      discountPrice.innerText = Math.floor(data.price - (data.price / 100) * data.discountPercentage) + "€";
      discountPercentage.innerText = "(-" + data.discountPercentage + "%)";
      availableProducts.innerText = "Noch " + data.stock + " Stück auf Lager";
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

function getProductCategories() {
  fetch("https://dummyjson.com/products/categories")
    .then((res) => res.json())
    // .then(console.log)
    .then((data) => {
      data.forEach((category) => {
        console.log(category);
        let cat = document.createElement("option");
        cat.value = category;
        cat.innerText = category;
        filterCategories.append(cat);
      });
    });
}
