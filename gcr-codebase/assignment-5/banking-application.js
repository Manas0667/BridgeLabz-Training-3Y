class BankAccount {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }

        this.#balance += amount;
        console.log(`₹${amount} deposited successfully.`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }

        this.#balance -= amount;
        console.log(`₹${amount} withdrawn successfully.`);
    }

    getBalance() {
        return this.#balance;
    }
}
const account = new BankAccount(10000);
console.log("Initial Balance: ₹" + account.getBalance());
account.deposit(5000);
console.log("Balance after deposit: ₹" + account.getBalance());

try {
    account.withdraw(20000);
} catch (error) {
    console.log("Transaction Error:", error.message);
}
console.log("Final Balance: ₹" + account.getBalance());