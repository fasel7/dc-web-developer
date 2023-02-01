const cart = function() {
    const privateObjectKey = 'geheim';
    const productList = [];

    function getObjectKey() {
        return privateObjectKey;
    }

    function addToCart(id, price, attributes) {
        const listIndex = getIndexById(id);

        if (!listIndex) {
            // push new product
            productList.push({
                id,
                price,
                quantity: 1,
                attributes
            });

            return 1;
        } else {
            // increase quantity
            const newAmount = parseInt(productList[listIndex].quantity) +1;
            updateQuantity(id, newAmount);

            return newAmount;
        }
    }
    function getIndexById(id) {
        let foundIndex = false;

        for (let idx in productList) {
            if (productList[idx].id == id) {
                foundIndex = idx;
                break;
            }
        }

        return foundIndex;
    }
    function removeFromCart(id) {
        const foundIndex = getIndexById(id);
        if (foundIndex) {
            productList.splice(foundIndex, 1);
        }
    }
    function updateQuantity(id, quantity) {
        // check if qty = 0
        if (quantity === 0) {
            removeFromCart(id);
        } else {
            // update products qty in list
            productList[getIndexById(id)].quantity = quantity;
        }
    }
    function getPrice(id) {
        const product = productList[getIndexById(id)];
        return product.quantity * product.price;
    }
    function getCount() {
        return productList.length;
    }
    function getTotal() {
        // calc sum of product prices
        let total = 0;
        productList.forEach(element => {
            total += element.price * element.quantity;
        });
        return total;
    }
    function checkout() {
        // return product list
        return {
            productList,
            count: getCount(),
            total: getTotal()
        };
    }
    
    return {
        productList,
        addToCart,
        removeFromCart,
        updateQuantity,
        getPrice,
        getCount,
        getTotal,
        checkout,
        getObjectKey
    }
}

export { cart }