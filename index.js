// ===============================
// 1. UPDATE HEADER
// ===============================

const header = document.getElementById("header");

if (header) {
  header.textContent = "Flatbooks Technical Books";
}

// ===============================
// 2. GET BOOK LIST
// ===============================

const bookList = document.getElementById("book-list");

// ===============================
// 3. FIX: GET BOOKS SAFELY (IMPORTANT)
// ===============================

const booksData = window.books;

// Safety check (prevents crash)
if (!booksData) {
  console.error("Books data is not defined (window.books is missing)");
}

// ===============================
// 4. RENDER BOOKS
// ===============================

if (bookList && booksData) {
  booksData.forEach((book) => {
    // CREATE REQUIRED LI
    const li = document.createElement("li");

    // IMAGE
    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;

    // TITLE
    const title = document.createElement("h3");
    title.textContent = book.title;

    // AUTHOR
    const author = document.createElement("p");
    author.textContent = book.author;

    // APPEND INSIDE LI
    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(author);

    // APPEND TO DOM
    bookList.appendChild(li);
  });
}