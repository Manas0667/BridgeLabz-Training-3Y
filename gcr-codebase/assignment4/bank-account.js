class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return "Deposit successful!";
        }

        return "Enter a valid deposit amount.";
    }

    withdraw(amount) {
        if (amount <= 0) {
            return "Enter a valid withdrawal amount.";
        }

        if (amount > this.balance) {
            return "Insufficient balance.";
        }

        this.balance -= amount;
        return "Withdrawal successful!";
    }

    displayDetails() {
        document.getElementById("accountDetails").innerHTML = `
            Account Number: ${this.accountNumber}<br>
            Account Holder: ${this.accountHolder}<br>
            Balance: ₹${this.balance}
        `;
    }
}

const account = new BankAccount(101, "Manas", 10000);

function depositMoney() {
    const amount = Number(document.getElementById("depositAmount").value);

    document.getElementById("message").textContent = account.deposit(amount);

    account.displayDetails();
    document.getElementById("depositAmount").value = "";
}

function withdrawMoney() {
    const amount = Number(document.getElementById("withdrawAmount").value);

    document.getElementById("message").textContent = account.withdraw(amount);

    account.displayDetails();
    document.getElementById("withdrawAmount").value = "";
}

account.displayDetails();