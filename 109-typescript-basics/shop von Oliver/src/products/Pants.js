import Product from "../base/Product.js";

export default class Pants extends Product {
    /**
     * represents pants with different constructor than Product
     * @param {number} id
     * @param {string} name
     * @param {number} price
     * @param {array} sizes
     */
    constructor(id, name, price, sizes = [29, 30, 31]) {
        super(id, name, price);

        this.sizes = sizes;
    }
}