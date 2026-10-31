const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");

    let namePattern = /^[A-Za-z]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^\d{10}$/;
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;

    let isValid = true;

    function validate(input, pattern, errorId, message) {
        let error = document.getElementById(errorId);

        if (!pattern.test(input.value.trim())) {
            input.classList.add("invalid");
            input.classList.remove("valid");
            error.textContent = message;
            isValid = false;
        } else {
            input.classList.add("valid");
            input.classList.remove("invalid");
            error.textContent = "";
        }
    }

    validate(name, namePattern, "nameError", "Name must contain alphabets only");
    validate(email, emailPattern, "emailError", "Enter a valid email");
    validate(phone, phonePattern, "phoneError", "Phone must contain exactly 10 digits");
    validate(password, passwordPattern, "passwordError", "Password needs an uppercase letter, number and special character");

    let message = document.getElementById("message");

    if (isValid) {
        message.textContent = "Registration Successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Please correct the errors.";
        message.style.color = "red";
    }
});