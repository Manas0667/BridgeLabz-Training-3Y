const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

function saveEdit(item) {
    const input = item.querySelector(".editInput");

    if (!input) return;

    const newName = input.value.trim();

    if (newName) {
        item.querySelector(".productName").textContent = newName;
    }

    input.remove();
    item.querySelector(".productName").style.display = "inline";
}

function addProduct() {
    const name = productInput.value.trim();

    if (!name) return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="productName">${name}</span>
        <button data-action="edit">Edit</button>
        <button data-action="delete">Delete</button>
    `;

    productList.appendChild(li);
    productInput.value = "";
}

addButton.addEventListener("click", addProduct);

productList.addEventListener("click", event => {
    const button = event.target.closest("button");

    if (!button) return;

    const item = button.closest("li");

    if (button.dataset.action === "delete") {
        item.remove();
    }

    if (button.dataset.action === "edit") {
        if (item.querySelector(".editInput")) return;

        const span = item.querySelector(".productName");

        const input = document.createElement("input");
        input.className = "editInput";
        input.value = span.textContent;

        span.style.display = "none";
        span.after(input);

        input.focus();

        input.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                saveEdit(item);
            }
        });

        input.addEventListener("blur", () => {
            saveEdit(item);
        });
    }
});

document.addEventListener("click", event => {
    document.querySelectorAll(".editInput").forEach(input => {
        const item = input.closest("li");

        if (!item.contains(event.target)) {
            saveEdit(item);
        }
    });
});