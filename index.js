// ⚠️ IMPORTANT:
// If your lab already provides a "books" array,
// DELETE this one and use theirs EXACTLY.

const books = [
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    image: "https://covers.openlibrary.org/b/id/8225261-L.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
  }
];


// ✅ 1. SELECT AND CHANGE HEADER
const header = document.getElementById("main-title");
header.textContent = "Flatbooks Store";


// ✅ 2. SELECT MAIN CONTAINER
const bookList = document.getElementById("book-list");


// ✅ 3. LOOP THROUGH BOOKS
books.forEach(function(book) {

  // 🔹 CREATE CONTAINER
  const bookContainer = document.createElement("div");

  // 🔹 CREATE TITLE
  const bookTitle = document.createElement("h2");
  bookTitle.textContent = book.title;

  // 🔹 CREATE AUTHOR
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = "Author: " + book.author;

  // 🔹 CREATE IMAGE
  const bookImage = document.createElement("img");
  bookImage.src = book.image;
  bookImage.alt = book.title;

  // 🔹 APPEND TO CONTAINER
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  // 🔹 APPEND TO PAGE
  bookList.appendChild(bookContainer);

});