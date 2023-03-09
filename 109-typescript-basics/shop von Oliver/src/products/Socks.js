import Product from "../base/Product.js";

export default class Socks extends Product {
    constructor(id, name, price) {
        super(id, name, price);
        this.colors = ['red','yellow'];
    }
}