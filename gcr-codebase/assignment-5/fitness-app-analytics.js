class FitnessAnalytics {
    constructor(workoutData) {
        if (!workoutData || workoutData.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }

        this.workoutData = workoutData;
    }

    getActiveUsers() {
        return this.workoutData.filter(user => user.steps > 7000);
    }

    getAverageCalories() {
        return this.workoutData.reduce((total, user) => total + user.calories, 0)
            / this.workoutData.length;
    }

    getUserSummary() {
        return this.workoutData.map(user =>
            `${user.user} walked ${user.steps} steps and burned ${user.calories} calories.`
        );
    }
}

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const fitness = new FitnessAnalytics(workoutData);

    console.log("Active Users:");
    console.log(fitness.getActiveUsers());

    console.log("\nAverage Calories:");
    console.log(fitness.getAverageCalories());

    console.log("\nUser Summary:");
    console.log(fitness.getUserSummary());
} catch (error) {
    console.log("Analytics Error:", error.message);
}