class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        this.items.push(product);
        this.displayCart();
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.displayCart();
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    displayCart() {
        const cartItems = document.getElementById("cartItems");

        cartItems.innerHTML = this.items.map(item => `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="cart.removeItem(${item.id})">Remove</button>
            </p>
        `).join("");

        document.getElementById("total").textContent =
            `Total: ₹${this.calculateTotal()}`;
    }
}

const products = [
    new Product(1, "Laptop", 50000),
    new Product(2, "Headphones", 2000),
    new Product(3, "Keyboard", 1500)
];

const cart = new ShoppingCart();

const productList = document.getElementById("productList");

products.forEach(product => {
    productList.innerHTML += `
        <p>
            ${product.name} - ₹${product.price}
            <button onclick="cart.addItem(products.find(item => item.id === ${product.id}))">
                Add to Cart
            </button>
        </p>
    `;
});