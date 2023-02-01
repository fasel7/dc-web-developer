const cartToDom = function () {
  function add(id) {
    console.log(products[id - 1]);
    const prod = products[id - 1];
    const cartContainer = document.getElementById("cart-container");

    cartContainer.innerHTML +=
      '<li class="cart-list" id="' +
      prod.id +
      '"><h3>' +
      prod.name +
      '</h3><input type="number" value="1" /><h4>' +
      prod.price +
      "€</h4><button id=" +
      prod.id +
      ">delete</button></li>";
    shoppingCart.addToCart(prod.id, prod.price, prod.attributes);
    document.querySelectorAll("input").forEach((element) => {
      element.addEventListener("change", updateQuantityInDom);
    });
    document.querySelectorAll("button").forEach((product) => {
      product.addEventListener("click", (event) => {
        cartDom.remove(event.target.id);
        console.log(event.target.parentNode);
        event.target.parentNode.remove();
      });
    });
  }
  function remove(id) {
    shoppingCart.removeFromCart(id);
    console.log(id.id);
  }
  function updateQuantityInDom(event) {
    console.log(event.target.parentNode.id);
  }
  return { add, remove };
};

const cartDom = cartToDom();
