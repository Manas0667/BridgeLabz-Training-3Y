const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const error = document.getElementById("error");
const summary = document.getElementById("summary");

let currentStep = 0;

function showStep() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });

    backButton.style.display = currentStep === 0 ? "none" : "inline";

    nextButton.textContent = currentStep === 2 ? "Submit" : "Next";

    error.textContent = "";
}

function validateStep() {
    const inputs = [
        document.getElementById("name"),
        document.getElementById("email"),
        document.getElementById("password")
    ];

    const value = inputs[currentStep].value.trim();

    if (!value) {
        error.textContent = "This field is required.";
        return false;
    }

    if (currentStep === 1 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error.textContent = "Enter a valid email address.";
        return false;
    }

    if (currentStep === 2 && value.length < 6) {
        error.textContent = "Password must contain at least 6 characters.";
        return false;
    }

    return true;
}

nextButton.addEventListener("click", () => {
    if (!validateStep()) return;

    if (currentStep < 2) {
        currentStep++;
        showStep();
    } else {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        document.getElementById("navigation").style.display = "none";
        steps.forEach(step => step.style.display = "none");

        summary.innerHTML = `
            <h2>Registration Completed!</h2>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Password: ********</p>
        `;
    }
});

backButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

showStep();