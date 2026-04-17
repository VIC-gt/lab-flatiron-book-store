// ===============================
// 1. HEADER UPDATE
// ===============================

const header = document.getElementById("header");

header.textContent = "Flatbooks Technical Books";

// ===============================
// 2. BOOK LIST + EXISTING LI
// ===============================

const bookList = document.getElementById("book-list");

// remove placeholder li if needed
const placeholder = document.getElementById("delete-this");
if (placeholder) {
  placeholder.remove();
}

// ===============================
// 3. BOOK DATA (IMPORTANT FIX)
// ===============================

// use global books (NOT window.books)
const booksData = books;

// ===============================
// 4. RENDER BOOKS (STRICT FORMAT)
// ===============================

booksData.forEach((book) => {
  const li = document.createElement("li");

  // IMAGE
  const img = document.createElement("img");
  img.src = book.image;

  // TITLE
  const title = document.createElement("h3");
  title.textContent = book.title;

  // AUTHOR
  const author = document.createElement("p");
  author.textContent = book.author;

  // APPEND IN CORRECT ORDER
  li.appendChild(img);
  li.appendChild(title);
  li.appendChild(author);

  // ADD TO LIST
  bookList.appendChild(li);
});