"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;

        case "power":
            return Math.pow(a, b);

        case "root":
            if (a < 0) {
                throw new Error("Cannot find square root of a negative number");
            }
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new InvalidOperationError("Operation not recognized");
    }
}

for (let operation of operations) {
    try {
        let result = calculate(operation, num1, num2);
        console.log(`Operation: ${operation}`);
        console.log(`Result: ${result}`);
    } catch (error) {
        console.log(`Operation: ${operation}`);
        console.log(`${error.name}: ${error.message}`);
    }

    console.log("------------------------");
}