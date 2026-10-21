let scores = [];

for (let i = 0; i < 8; i++) {
    let score = Math.floor(Math.random() * 71) + 30;
    scores.push(score);
}

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;

let passedStudents = scores.filter(score => score >= 50);
let studentResults = scores.map((score, index) => ({
    student: index + 1,
    score: score,
    result: score >= 50 ? "Pass" : "Fail"
}));

console.log("Array Performance Analyzer");
console.log("--------------------------");
console.log("Scores:", scores);
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Students Passed:", passedStudents.length);
console.log("Student Results:", studentResults);
