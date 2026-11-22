const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxLength = 100;

message.addEventListener("beforeinput", event => {
    if (message.value.length >= maxLength && event.data) {
        event.preventDefault();
    }
});

message.addEventListener("input", () => {
    const remaining = maxLength - message.value.length;

    counter.textContent = `${remaining} characters remaining`;

    counter.className = "";

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("warning");
    }

    if (remaining === 0) {
        counter.classList.add("danger");
    }
});

resetButton.addEventListener("click", () => {
    message.value = "";
    counter.textContent = "100 characters remaining";
    counter.className = "";
});