const menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
    const prices = orderItems.map(item => {
        const menuItem = menu.find(food => food.name === item);

        if (!menuItem) {
            throw new Error(`${item} is not available on the menu.`);
        }

        return menuItem.price;
    });

    const total = prices.reduce((sum, price) => sum + price, 0);

    return total;
}

try {
    const order = ["Pizza", "Burger", "Pasta"];
    const bill = calculateBill(order);

    console.log("Order:", order);
    console.log("Total Bill: ₹" + bill);
} catch (error) {
    console.log("Order Error:", error.message);
}

try {
    const order = ["Pizza", "Burger", "Sushi"];
    const bill = calculateBill(order);

    console.log("Total Bill: ₹" + bill);
} catch (error) {
    console.log("Order Error:", error.message);
}