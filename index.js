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
// 3. WAIT FOR BOOKS TO EXIST (CRITICAL FIX)
// ===============================

function renderBooks() {
  const data = typeof books !== "undefined" ? books : window.books;

  if (!data || !bookList) return;

  data.forEach((book) => {
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
}

// ===============================
// 4. HANDLE BOTH LOAD STATES
// ===============================

// run immediately
renderBooks();

// also run after DOM fully loads (CodeGrade safety)
document.addEventListener("DOMContentLoaded", renderBooks);