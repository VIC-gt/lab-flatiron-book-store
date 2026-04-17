// ✅ WAIT FOR DOM TO LOAD (prevents null errors)
document.addEventListener("DOMContentLoaded", function () {

  // ✅ 1. FIX HEADER (exact match for tests)
  const header = document.getElementById("header");
  header.textContent = "Flatbooks Technical Books";


  // ✅ 2. SELECT BOOK LIST
  const bookList = document.getElementById("book-list");

  // ✅ REMOVE TEMPLATE LI
  const oldItem = document.getElementById("delete-this");
  if (oldItem) {
    oldItem.remove();
  }


  // ⚠️ IMPORTANT:
  // DO NOT CREATE YOUR OWN books ARRAY
  // Use the one already provided in the repo


  // ✅ 3. LOOP THROUGH BOOKS
  books.forEach(function (book) {

    // 🔹 CREATE LIST ITEM
    const li = document.createElement("li");

    // 🔹 TITLE
    const title = document.createElement("h2");
    title.textContent = book.title;

    // 🔹 AUTHOR
    const author = document.createElement("p");
    author.textContent = book.author;

    // 🔹 IMAGE
    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;

    // 🔹 APPEND EVERYTHING
    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(img);

    // 🔹 ADD TO PAGE
    bookList.appendChild(li);

  });

});