javascript
let bonus = 5000;

function calculateSalary(permanentStatus) {
    let salary = 40000;
    let isPermanent = permanentStatus;

    if (isPermanent === true) {
        salary += bonus;
    }

    console.log("Permanent Employee:", isPermanent);
    console.log("Total Salary:", salary);
}

calculateSalary(true);
calculateSalary(false);

console.log("Global Bonus:", bonus);

