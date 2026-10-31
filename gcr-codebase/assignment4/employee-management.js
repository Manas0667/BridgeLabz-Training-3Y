class Employee {
    constructor(id, name, salary, department) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    displayDetails() {
        return `
            <p>
                ID: ${this.id}<br>
                Name: ${this.name}<br>
                Salary: ₹${this.salary}<br>
                Department: ${this.department}
            </p>
            <hr>
        `;
    }
}

class EmployeeManager {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    removeEmployee(id) {
        this.employees = this.employees.filter(employee => employee.id !== id);
    }

    displayEmployees() {
        const employeeList = document.getElementById("employeeList");

        employeeList.innerHTML = this.employees
            .map(employee => employee.displayDetails())
            .join("");
    }
}

const manager = new EmployeeManager();

manager.addEmployee(new Employee(1, "Manas", 50000, "IT"));
manager.addEmployee(new Employee(2, "Rahul", 45000, "HR"));
manager.addEmployee(new Employee(3, "Aman", 60000, "Development"));

manager.displayEmployees();

manager.removeEmployee(2);

console.log("After removing employee:");

manager.displayEmployees();