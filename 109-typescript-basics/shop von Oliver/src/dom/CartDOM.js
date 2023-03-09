export default class CartDOM {
    static privateObjectKey = 'geheim';
    #cartElement; // private vars and functions with #
    #amountElement;
    #sumElement;
    #callbackFunctions = {
        addedProduct: function () {}
    };

    constructor(cartId, callbackFunctions) {
        this.#cartElement = document.getElementById(cartId);
        this.#amountElement = this.#cartElement.querySelector('#cart-qty');
        this.#sumElement = this.#cartElement.querySelector('#cart-sum');
        this.#callbackFunctions = callbackFunctions;
    }

    /**
     *
     * @param product
     * @param quantity
     * @returns {Node}
     */
    addProduct(product, quantity = 1) {
        let element = document.getElementById('item-template').cloneNode(true);
        // insert product content
        element.getElementsByTagName('h4')[0].innerText = product.name;
        element.getElementsByTagName('input')[0].value = quantity;
        element.querySelector('p').innerText = '€ '+ product.price;
        element.id = 'product-'+ product.id;
        element.setAttribute('data-id', product.id);
        // save and add to dom
        this.#cartElement.appendChild(element);

        // callback
        if (this.#callbackFunctions.addedProduct) {
            this.#callbackFunctions.addedProduct(product.id);
        }

        return element;
    }

    updateProductAmount(id, amount) {
        const element = document.getElementById('product-'+ id);
        element.querySelector('input').value = amount;
    }

    updateProductPrice(id, price) {
        const element = document.getElementById('product-'+ id);
        element.querySelector('p').innerText = '€ '+ price;
    }

    updateAmount(amount) {
        this.#amountElement.innerText = 'Produkte : '+ amount;
    }
    updateSum(sum) {
        this.#sumElement.innerText = 'Summe: € '+ sum;
    }
    updateTotal(amount, sum) {
        this.updateAmount(amount);
        this.updateSum(sum);
    }

    getObjectKey() {
        return CartDOM.privateObjectKey;
    }
}