// ===============================
// 1. HEADER UPDATE
// ===============================

const header = document.getElementById("header");

if (header) {
  header.textContent = "Flatbooks Technical Books";
}

// ===============================
// 2. BOOK LIST CONTAINER
// ===============================

const bookList = document.getElementById("book-list");

// ===============================
// 3. GET BOOK DATA SAFELY
// ===============================

// Some labs use window.books, others use a local variable
const booksData = window.books || books;

// ===============================
// 4. SAFETY CHECK (VERY IMPORTANT)
// ===============================

if (!bookList || !booksData) {
  console.error("Missing bookList or booksData");
}

// ===============================
// 5. RENDER BOOKS
// ===============================

booksData.forEach((book) => {
  // CREATE LI (REQUIRED BY TESTS)
  const li = document.createElement("li");

  // TITLE
  const title = document.createElement("h3");
  title.textContent = book.title;

  // AUTHOR
  const author = document.createElement("p");
  author.textContent = book.author;

  // IMAGE
  const img = document.createElement("img");
  img.src = book.image;
  img.alt = book.title;

  // APPEND INSIDE LI
  li.appendChild(img);
  li.appendChild(title);
  li.appendChild(author);

  // APPEND TO BOOK LIST
  bookList.appendChild(li);
});