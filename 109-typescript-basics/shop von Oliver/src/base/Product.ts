export default class Product {
  id: number;
  name: string;
  price: number;
  private _colors: string[];
  private _sizes: string[] | number[];
  private _priceFactors: number[];
  /**
   * represents a product
   * @param {number} id
   * @param {string} name
   * @param {number} price
   */
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;

    this._colors = [];
    this._sizes = ["S", "M", "L"];
    this._priceFactors = [0.7, 1, 1.3];
  }

  toString() {
    return this.name;
  }

  set sizes(value) {
    this._sizes = value;
  }

  get sizes() {
    return this._sizes;
  }

  set colors(value) {
    this._colors = value;
  }

  get colors() {
    return this._colors;
  }

  set priceFactors(value) {
    this._priceFactors = value;
  }

  get priceFactors() {
    return this._priceFactors;
  }

  /**
   * @todo loop through existing sizes
   * @returns {number[]}
   */
  getPricePerSize() {
    return [this.price * this._priceFactors[0], this.price * this._priceFactors[1], this.price * this._priceFactors[2]];
  }

  getListHtml() {
    let html = `<div data-id="${this.id}"><h2>${this.toString()}</h2>
            <button data-id="${this.id}" data-name="${this.name}" data-price="${this.price}">to Basket</button></div>`;
    return html;
  }
}
