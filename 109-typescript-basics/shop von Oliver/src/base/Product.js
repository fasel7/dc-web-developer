"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    /**
     * represents a product
     * @param {number} id
     * @param {string} name
     * @param {number} price
     */
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this._colors = [];
        this._sizes = ["S", "M", "L"];
        this._priceFactors = [0.7, 1, 1.3];
    }
    Product.prototype.toString = function () {
        return this.name;
    };
    Object.defineProperty(Product.prototype, "sizes", {
        get: function () {
            return this._sizes;
        },
        set: function (value) {
            this._sizes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "colors", {
        get: function () {
            return this._colors;
        },
        set: function (value) {
            this._colors = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "priceFactors", {
        get: function () {
            return this._priceFactors;
        },
        set: function (value) {
            this._priceFactors = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @todo loop through existing sizes
     * @returns {number[]}
     */
    Product.prototype.getPricePerSize = function () {
        return [this.price * this._priceFactors[0], this.price * this._priceFactors[1], this.price * this._priceFactors[2]];
    };
    Product.prototype.getListHtml = function () {
        var html = "<div data-id=\"".concat(this.id, "\"><h2>").concat(this.toString(), "</h2>\n            <button data-id=\"").concat(this.id, "\" data-name=\"").concat(this.name, "\" data-price=\"").concat(this.price, "\">to Basket</button></div>");
        return html;
    };
    return Product;
}());
exports["default"] = Product;
