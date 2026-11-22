const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const theme = button.getAttribute("data-theme");

        document.body.setAttribute("class", theme);
        document.body.setAttribute("data-theme", theme);

        console.log("Current Theme:", document.body.getAttribute("data-theme"));
    });
});