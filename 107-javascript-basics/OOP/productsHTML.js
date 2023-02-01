const productToDom = function () {
  function add() {
    const productsContainer = document.getElementById("products-container");

    products.forEach((element) => {
      productsContainer.innerHTML +=
        "<li id=" + element.id + ' class="product-list"><h3>' + element.name + "</h3><h4>Preis:" + element.price + "€</h4></li>";
    });
    document.querySelectorAll(".product-list").forEach((product) => {
      product.addEventListener("click", (event) => {
        cartDom.add(event.target.id);
        console.log(event.target.id);
      });
    });
  }
  return { add };
};

const productDom = productToDom();

productDom.add();
