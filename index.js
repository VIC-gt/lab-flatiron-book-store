// ===============================
// 1. UPDATE HEADER TEXT
// ===============================

// REQUIRED: id="header"
const header = document.getElementById("header");

if (header) {
  header.textContent = "Flatbooks Technical Books";
}

// ===============================
// 2. SELECT BOOK LIST CONTAINER
// ===============================

const bookList = document.getElementById("book-list");

// ===============================
// 3. BOOK DATA (from window object)
// ===============================

const books = window.books;

// ===============================
// 4. CREATE BOOK ITEMS
// ===============================

books.forEach((book) => {
  // Create list item (IMPORTANT: tests expect <li>)
  const li = document.createElement("li");

  // Create title
  const bookTitle = document.createElement("h3");
  bookTitle.textContent = book.title;

  // Create author
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = book.author;

  // Create image
  const bookImage = document.createElement("img");
  bookImage.src = book.image;
  bookImage.alt = book.title;

  // Append elements into <li>
  li.appendChild(bookImage);
  li.appendChild(bookTitle);
  li.appendChild(bookAuthor);

  // Append to book list
  bookList.appendChild(li);
});