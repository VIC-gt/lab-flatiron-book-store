// ===============================
// WAIT UNTIL DOM IS READY
// ===============================

document.addEventListener("DOMContentLoaded", () => {

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
  // 3. GET BOOKS (CRITICAL FIX)
  // ===============================

  const booksData = typeof books !== "undefined" ? books : [];

  // ===============================
  // 4. CLEAR PLACEHOLDER IF EXISTS
  // ===============================

  const placeholder = document.getElementById("delete-this");
  if (placeholder) {
    placeholder.remove();
  }

  // ===============================
  // 5. RENDER BOOKS
  // ===============================

  booksData.forEach((book) => {

    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = book.image;

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = book.author;

    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(author);

    bookList.appendChild(li);
  });

});