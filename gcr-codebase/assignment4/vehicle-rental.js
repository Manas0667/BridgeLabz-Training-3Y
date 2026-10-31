class Vehicle {
    constructor(id, name, rentalPrice, isAvailable = true) {
        this.id = id;
        this.name = name;
        this.rentalPrice = rentalPrice;
        this.isAvailable = isAvailable;
    }

    calculateRentalCost(days) {
        return this.rentalPrice * days;
    }

    rent() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return true;
        }

        return false;
    }

    returnVehicle() {
        this.isAvailable = true;
    }
}

class RentalSystem {
    constructor() {
        this.vehicles = [];
    }

    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }

    displayVehicles() {
        const vehicleList = document.getElementById("vehicleList");

        vehicleList.innerHTML = this.vehicles.map(vehicle => `
            <p>
                ID: ${vehicle.id}<br>
                Name: ${vehicle.name}<br>
                Rental Price: ₹${vehicle.rentalPrice} per day<br>
                Status: ${vehicle.isAvailable ? "Available" : "Rented"}
            </p>
            <hr>
        `).join("");
    }

    rentVehicle(id, days) {
        const vehicle = this.vehicles.find(vehicle => vehicle.id === id);

        if (!vehicle) {
            return "Vehicle not found.";
        }

        if (days <= 0) {
            return "Enter valid rental days.";
        }

        if (vehicle.rent()) {
            const cost = vehicle.calculateRentalCost(days);
            return `${vehicle.name} rented successfully. Total cost: ₹${cost}`;
        }

        return "Vehicle is already rented.";
    }
}

const rentalSystem = new RentalSystem();

rentalSystem.addVehicle(new Vehicle(1, "Car", 2000));
rentalSystem.addVehicle(new Vehicle(2, "Bike", 500));
rentalSystem.addVehicle(new Vehicle(3, "Scooter", 300));

function rentVehicle() {
    const id = Number(document.getElementById("vehicleId").value);
    const days = Number(document.getElementById("days").value);

    const result = rentalSystem.rentVehicle(id, days);

    document.getElementById("message").textContent = result;

    rentalSystem.displayVehicles();
}

rentalSystem.displayVehicles();