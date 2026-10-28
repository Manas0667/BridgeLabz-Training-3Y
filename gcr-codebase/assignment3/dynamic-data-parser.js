"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let value of apiData) {
    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    if (
        typeof value === "string" &&
        value.trim() !== "" &&
        !Number.isNaN(numberValue)
    ) {
        validNumbers.push(numberValue);
    } else if (
        typeof value === "number" ||
        value === null ||
        value === undefined ||
        Number.isNaN(numberValue) ||
        value.trim?.() === ""
    ) {
        invalidNumbers.push(value);
    } else {
        invalidNumbers.push(value);
    }

    console.log("Original Value:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);
    console.log("------------------------");
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);