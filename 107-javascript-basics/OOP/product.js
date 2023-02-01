class Product {
  constructor(id, name, price, quantity, attributes) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.attributes = attributes;
  }
}

const products = [
  new Product(1, "Ziege", 50, 1),
  new Product(2, "Käsekuchen", 4.5, 1),
  new Product(3, "T-Shirt", 15, 1, { size: "M" }),
  new Product(4, "Auftragskiller", 99, 1),
];

console.log(products);
