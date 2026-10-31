class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        const container = document.getElementById("formContainer");

        let formHTML = '<form id="dynamicForm">';

        this.fields.forEach(field => {
            formHTML += `
                <label>${field.label}</label><br>
                <input type="${field.type}" name="${field.name}" required>
                <br><br>
            `;
        });

        formHTML += '<button type="submit">Submit</button>';
        formHTML += '</form>';

        container.innerHTML = formHTML;

        document.getElementById("dynamicForm").addEventListener("submit", event => {
            event.preventDefault();

            const formData = this.getFormData();

            document.getElementById("output").textContent =
                JSON.stringify(formData, null, 2);
        });
    }

    getFormData() {
        const form = document.getElementById("dynamicForm");
        const formData = new FormData(form);

        return Object.fromEntries(formData.entries());
    }
}

const fields = [
    { type: "text", name: "username", label: "Username" },
    { type: "email", name: "email", label: "Email" },
    { type: "number", name: "age", label: "Age" },
    { type: "password", name: "password", label: "Password" }
];

const formBuilder = new FormBuilder(fields);

formBuilder.createForm();