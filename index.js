
document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // 1. HEADER
  // ===============================
  const header = document.getElementById("header");
  header.textContent = "Flatbooks Technical Books";

  // ===============================
  // 2. BOOK LIST
  // ===============================
  const bookList = document.getElementById("book-list");

  // ===============================
  // 3. USE PROVIDED BOOKS (IMPORTANT FIX)
  // ===============================
  const booksData = books;

  // ===============================
  // 4. REMOVE PLACEHOLDER
  // ===============================
  const placeholder = document.getElementById("delete-this");
  if (placeholder) placeholder.remove();

  // ===============================
  // 5. CREATE BOOKS
  // ===============================
  booksData.forEach((book) => {

    const li = document.createElement("li");
    li.classList.add("book-container");

    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;

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