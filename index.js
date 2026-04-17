// ===============================
// 1. SELECT AND UPDATE HEADER
// ===============================

// Try common selectors used in Flatiron labs
const header =
  document.querySelector("h1") ||
  document.querySelector("#title") ||
  document.querySelector("header h1");

// Update bookstore title
if (header) {
  header.textContent = "Flatbook";
}

// ===============================
// 2. GET BOOK CONTAINER
// ===============================

// Common container used in labs
const bookContainer =
  document.querySelector("#book-list") ||
  document.querySelector(".books") ||
  document.querySelector("#books");

// ===============================
// 3. BOOK DATA (if already provided, this will be ignored safely)
// ===============================

const books = window.books || [
  // fallback sample structure (in case needed for testing)
  {
    title: "Sample Book",
    author: "Unknown Author",
    image:
      "https://via.placeholder.com/150",
  },
];

// ===============================
// 4. CREATE BOOK ELEMENTS
// ===============================

books.forEach((book) => {
  // Container for each book
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  // Book Title
  const bookTitle = document.createElement("h3");
  bookTitle.textContent = book.title;

  // Book Author
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = `Author: ${book.author}`;

  // Book Image
  const bookImage = document.createElement("img");
  bookImage.src = book.image || book.imageUrl;
  bookImage.alt = book.title;

  // Append elements into book container
  bookDiv.appendChild(bookImage);
  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(bookAuthor);

  // Append book to main container
  if (bookContainer) {
    bookContainer.appendChild(bookDiv);
  }
});