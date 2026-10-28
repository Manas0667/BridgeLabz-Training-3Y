"use strict";

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter pyramid height (default 5): ", function(input) {
    let rows = input.trim() === "" ? 5 : Number(input);

    if (!Number.isInteger(rows) || rows < 1) {
        console.log("Please enter a positive integer.");
        rl.close();
        return;
    }

    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trim());
    }

    rl.close();
});