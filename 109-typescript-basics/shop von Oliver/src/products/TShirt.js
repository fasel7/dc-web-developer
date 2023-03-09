import Product from "../base/Product.js";

export default class TShirt extends Product {
    constructor(id, name, price) {
        super(id, name, price);

        this.priceFactors = [0.8, 1, 1.2];
    }
    onlyInTShirt() {

    }

    set sizes(value) {
        this._sizes = value;
    }

    get sizes() {
        return this._sizes;
    }
}