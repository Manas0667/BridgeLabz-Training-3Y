class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance < 0) {
            throw new Error("Distance must be a valid non-negative number.");
        }

        return this.distance * 12;
    }
}

const driver = new Driver("Manas", 4.8, "Swift", "UP85AB1234");

console.log("Driver:", driver.name);
console.log("Rating:", driver.rating);
console.log("Vehicle:", driver.vehicle);
console.log("Vehicle Number:", driver.vehicleNumber);

try {
    const trip = new Trip("Mathura", "Agra", 60);

    console.log("From:", trip.fromLocation);
    console.log("To:", trip.toLocation);
    console.log("Distance:", trip.distance, "km");
    console.log("Fare: ₹" + trip.calculateFare());
} catch (error) {
    console.log("Trip Error:", error.message);
}

try {
    const invalidTrip = new Trip("Mathura", "Delhi", -10);

    console.log("Fare: ₹" + invalidTrip.calculateFare());
} catch (error) {
    console.log("Trip Error:", error.message);
}