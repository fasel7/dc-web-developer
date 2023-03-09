"use strict";
exports.__esModule = true;
exports.cart = void 0;
var cart = function () {
    var privateObjectKey = "geheim";
    var productList = [];
    function getObjectKey() {
        return privateObjectKey;
    }
    function addToCart(id, price, attributes) {
        var listIndex = getIndexById(id);
        if (!listIndex) {
            // push new product
            productList.push({
                id: id,
                price: price,
                quantity: 1,
                attributes: attributes
            });
            return 1;
        }
        else {
            // increase quantity
            var newAmount = parseInt(productList[listIndex].quantity) + 1;
            updateQuantity(id, newAmount);
            return newAmount;
        }
    }
    function getIndexById(id) {
        var foundIndex = false;
        for (var idx in productList) {
            if (productList[idx].id == id) {
                foundIndex = idx;
                break;
            }
        }
        return foundIndex;
    }
    function removeFromCart(id) {
        var foundIndex = getIndexById(id);
        if (foundIndex) {
            productList.splice(foundIndex, 1);
        }
    }
    function updateQuantity(id, quantity) {
        // check if qty = 0
        if (quantity === 0) {
            removeFromCart(id);
        }
        else {
            // update products qty in list
            productList[getIndexById(id)].quantity = quantity;
        }
    }
    function getPrice(id) {
        var product = productList[getIndexById(id)];
        return product.quantity * product.price;
    }
    function getCount() {
        return productList.length;
    }
    function getTotal() {
        // calc sum of product prices
        var total = 0;
        productList.forEach(function (element) {
            total += element.price * element.quantity;
        });
        return total;
    }
    function checkout() {
        // return product list
        return {
            productList: productList,
            count: getCount(),
            total: getTotal()
        };
    }
    return {
        productList: productList,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        updateQuantity: updateQuantity,
        getPrice: getPrice,
        getCount: getCount,
        getTotal: getTotal,
        checkout: checkout,
        getObjectKey: getObjectKey
    };
};
exports.cart = cart;
