class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is working in ${this.department} department.`;
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    work() {
        return `${this.name} is managing the ${this.department} department.`;
    }
}

const employee1 = new Employee("Rahul", "IT");
const employee2 = new Employee("Aman", "HR");
const manager1 = new Manager("Manas", "Development");

const employees = [employee1, employee2, manager1];

employees.forEach(employee => {
    console.log(employee.work());
});