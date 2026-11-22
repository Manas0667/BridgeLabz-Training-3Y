function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    return this.price - (this.price * percent / 100);
};

const product1 = new Product("Laptop", 50000);
const product2 = new Product("Headphones", 3000);
const product3 = new Product("Keyboard", 2000);

console.log(`${product1.name} after 10% discount: ₹${product1.applyDiscount(10)}`);
console.log(`${product2.name} after 20% discount: ₹${product2.applyDiscount(20)}`);
console.log(`${product3.name} after 15% discount: ₹${product3.applyDiscount(15)}`);