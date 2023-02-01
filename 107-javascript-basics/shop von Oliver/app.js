import TShirt from "./src/products/TShirt.js";
import Pants from "./src/products/Pants.js";
import Socks from "./src/products/Socks.js";
import { cart } from "./src/base/cart.js";
import CartDOM from "./src/dom/CartDOM.js";

// parent dom elements
const listElement = document.getElementById('produktliste');
const detailElement = document.getElementById('produktdetail');
const cartElement = document.getElementById('warenkorb');

// product list -----------------------
const products = [
    new TShirt(1410, 'Black T', 40),
    new TShirt(1420, 'Black T-50', 50),
    new Pants(1510, 'Baggy Pants', 90, [30,31,32]),
    new Pants(1520, 'Straight Pants', 80),
    new Socks(1600, 'Socks', 10)
];

products.forEach(object => {
    listElement.innerHTML += object.getListHtml();
});
addEventListenerToElements(
    listElement.getElementsByTagName('button'),
    'click', addToBasket
);
function addToBasket(event) {
    const target = event.target;
    const product = {
        id: target.getAttribute('data-id'),
        name: target.getAttribute('data-name'),
        price: target.getAttribute('data-price')
    };
    const productAmount = shoppingCart.addToCart(product.id, product.price/*, product.attributes */);

    if (productAmount === 1) {
        cartHtml.addProduct(product);
    } else {
        changedProduct(event, productAmount);
        cartHtml.updateProductAmount(product.id, productAmount);
    }

    cartHtml.updateTotal(shoppingCart.getCount(), shoppingCart.getTotal());
}

// helper -----------------------
/**
 * add function to given elements as listener
 * @param {HTMLCollection} elements
 * @param {string} type of event
 * @param {function} listener
 */
function addEventListenerToElements(elements, type, listener) {
    for (let element of elements) {
        element.addEventListener(type, listener);
    }
}

// shopping cart -----------------------
const shoppingCart = cart();
const cartHtml = new CartDOM('warenkorb', {
    addedProduct: function () {
        // helper or direct adding of event listeners
        addEventListenerToElements(
            cartElement.querySelectorAll('input'), 'change', changedProduct
        );
        cartElement.querySelectorAll('button').forEach(element => {
            element.addEventListener('click', removedProduct);
        });
    }
});

function changedProduct(event, productAmount) {
    const productElement = event.target;
    const productId = productElement.parentNode.getAttribute('data-id');
    const newAmount = productAmount ? productAmount : productElement.value;

    if (newAmount == 0) {
        removedProduct(event);
    } else {
        shoppingCart.updateQuantity(productId, newAmount);
        cartHtml.updateProductPrice(productId, shoppingCart.getPrice(productId));
        cartHtml.updateSum(shoppingCart.getTotal());
    }
}

function removedProduct(event) {
    const productElement = event.target;
    productElement.parentNode.remove();

    shoppingCart.removeFromCart(productElement.parentNode.getAttribute('data-id'));
    cartHtml.updateTotal(shoppingCart.getCount(), shoppingCart.getTotal());
}