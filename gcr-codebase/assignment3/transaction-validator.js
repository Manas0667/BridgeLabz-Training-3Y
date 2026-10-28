"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        let transaction = transactions[i];

        if (transaction === null) {
            throw new Error("NullTransactionError");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("MissingDataError");
        }

        if (transaction.amount < 0) {
            throw new Error("NegativeAmountError");
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id}: Valid`);
    } catch (error) {
        invalid.push({
            transaction: transactions[i],
            error: error.message
        });

        console.log(`Transaction ${i + 1}: ${error.message}`);
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);