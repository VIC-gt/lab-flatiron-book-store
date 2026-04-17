// ===============================
// 1. HEADER UPDATE
// ===============================

const header = document.getElementById("header");

header.textContent = "Flatbooks Technical Books";

// ===============================
// 2. BOOK LIST
// ===============================

const bookList = document.getElementById("book-list");

// ===============================
// 3. GET BOOKS (NO GUESSING, SAFE GLOBAL ACCESS)
// ===============================

// safest way in CodeGrade environments
const booksData = Array.isArray(window.books)
  ? window.books
  : Array.isArray(books)
  ? books
  : [];

// ===============================
// 4. REMOVE PLACEHOLDER LI
// ===============================

const placeholder = document.getElementById("delete-this");
if (placeholder) placeholder.remove();

// ===============================
// 5. RENDER BOOKS
// ===============================

booksData.forEach((book) => {
  const li = document.createElement("li");

  const img = document.createElement("img");
  img.src = book.image;

  const title = document.createElement("p");
  title.textContent = book.title;

  const author = document.createElement("p");
  author.textContent = book.author;

  li.appendChild(img);
  li.appendChild(title);
  li.appendChild(author);

  bookList.appendChild(li);
});