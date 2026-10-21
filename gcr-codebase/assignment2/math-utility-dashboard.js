let x = 16.75;

let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

console.log("Math Utility Dashboard");
console.log("----------------------");
console.log(`Number: ${x}`);
console.log(`Rounded Value: ${roundedValue}`);
console.log(`Square Root: ${squareRoot}`);
console.log(`Power (x³): ${powerValue}`);
console.log(`Random Number (10-50): ${randomNumber}`);