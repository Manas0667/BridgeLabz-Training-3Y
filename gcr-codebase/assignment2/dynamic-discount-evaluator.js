const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    let finalPrice = product.price - (product.price * discount / 100);
    discountedTotal += finalPrice;

    console.log("Item:", product.item);
    console.log("Original Price:", product.price);
    console.log("Discount:", discount + "%");
    console.log("Final Price:", finalPrice);
    console.log("----------------------");
}

if (total > 50000) {
    discountedTotal = discountedTotal - (discountedTotal * 5 / 100);
    console.log("Extra 5% discount applied.");
}

console.log("Total Cart Value:", total);
console.log("Final Cart Total:", discountedTotal);
