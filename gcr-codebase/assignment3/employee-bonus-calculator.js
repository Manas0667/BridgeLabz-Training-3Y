"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    for (let employee of employees) {
        if (!employee.name || employee.salary === undefined || employee.years === undefined) {
            throw new Error("Missing employee details");
        }

        let salary = Number(employee.salary);
        let years = Number(employee.years);

        if (Number.isNaN(salary) || Number.isNaN(years)) {
            throw new Error("Invalid salary or years");
        }

        let bonus = years > 3 ? salary * 0.1 : salary * 0.05;
        let totalSalary = salary + bonus;

        console.log(`Employee: ${employee.name}`);
        console.log(`Salary: ₹${salary}`);
        console.log(`Years of Service: ${years}`);
        console.log(`Bonus: ₹${bonus}`);
        console.log(`Total Salary: ₹${totalSalary}`);
        console.log("------------------------");
    }
} catch (error) {
    console.log("Error:", error.message);
}