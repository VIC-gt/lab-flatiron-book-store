// ===============================
// 1. HEADER UPDATE
// ===============================

const header = document.getElementById("header");

if (header) {
  header.textContent = "Flatbooks Technical Books";
}

// ===============================
// 2. BOOK LIST
// ===============================

const bookList = document.getElementById("book-list");

// ===============================
// 3. SAFE BOOK DATA ACCESS (CRITICAL FIX)
// ===============================

// try both possible sources safely
const booksData = typeof books !== "undefined" ? books : window.books;

// stop if missing (prevents crash)
if (!booksData || !bookList) {
  console.error("Missing booksData or bookList");
} else {
  // ===============================
  // 4. RENDER BOOKS
  // ===============================

  booksData.forEach((book) => {
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

    // append
    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(author);

    bookList.appendChild(li);
  });
}