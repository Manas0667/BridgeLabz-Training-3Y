class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        return this.marks.reduce((total, mark) => total + mark, 0) / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        } else if (average >= 60) {
            return "B";
        } else if (average >= 40) {
            return "C";
        } else {
            return "F";
        }
    }
}

const students = [
    new Student("Manas", [85, 90, 78, 88, 92]),
    new Student("Rahul", [65, 70, 60, 75, 68]),
    new Student("Aman", [30, 35, 40, 25, 38])
];

students.forEach(student => {
    console.log(`Name: ${student.name}`);
    console.log(`Average: ${student.calculateAverage()}`);
    console.log(`Grade: ${student.getGrade()}`);
    console.log("-------------------");
});