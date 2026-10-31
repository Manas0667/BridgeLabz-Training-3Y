class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            return true;
        }
        return false;
    }

    returnBook() {
        this.isIssued = false;
    }
}

const books = [
    new Book("JavaScript Basics", "John Smith", "101"),
    new Book("Python Programming", "David Lee", "102"),
    new Book("Web Development", "Alex Brown", "103"),
    new Book("Data Structures", "Robert Martin", "104")
];

function displayBooks() {
    let bookList = document.getElementById("bookList");

    let availableBooks = books.filter(book => !book.isIssued);

    bookList.innerHTML = "";

    availableBooks.forEach(book => {
        bookList.innerHTML += `
            <p>
                Title: ${book.title}<br>
                Author: ${book.author}<br>
                ISBN: ${book.ISBN}
            </p>
            <hr>
        `;
    });

    if (availableBooks.length === 0) {
        bookList.innerHTML = "No books available.";
    }
}

function issueBook() {
    let isbn = document.getElementById("isbn").value;
    let message = document.getElementById("message");

    let book = books.find(book => book.ISBN === isbn);

    if (book) {
        if (book.issueBook()) {
            message.textContent = book.title + " issued successfully!";
            message.style.color = "green";
        } else {
            message.textContent = "Book is already issued.";
            message.style.color = "red";
        }
    } else {
        message.textContent = "Book not found.";
        message.style.color = "red";
    }

    displayBooks();
}

displayBooks();