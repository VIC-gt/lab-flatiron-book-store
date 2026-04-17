// ===============================
// 1. UPDATE HEADER
// ===============================

const header = document.getElementById("header");

header.textContent = "Flatbooks Technical Books";

// ===============================
// 2. GET BOOK LIST
// ===============================

const bookList = document.getElementById("book-list");

// ===============================
// 3. GET BOOK DATA (IMPORTANT)
// ===============================

const booksData = books;

// ===============================
// 4. RENDER BOOKS (TEST SAFE)
// ===============================

booksData.forEach((book) => {
  // create li (required by tests)
  const li = document.createElement("li");

  // image
  const img = document.createElement("img");
  img.src = book.image;

  // title
  const title = document.createElement("p");
  title.textContent = book.title;

  // author
  const author = document.createElement("p");
  author.textContent = book.author;

  // append in correct order
  li.appendChild(img);
  li.appendChild(title);
  li.appendChild(author);

  // append to DOM
  bookList.appendChild(li);
});