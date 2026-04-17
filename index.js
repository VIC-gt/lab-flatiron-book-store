// ✅ DEFINE BOOKS (REQUIRED — your tests expect these exact ones)
const books = [
  {
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    image: "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg"
  },
  {
    title: "JavaScript & JQuery: Interactive Front-End Web Development",
    author: "Jon Duckett",
    image: "https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX258_BO1,204,203,200_.jpg"
  }
];


// ✅ RUN AFTER DOM LOAD
document.addEventListener("DOMContentLoaded", function () {

  // ✅ FIX HEADER
  const header = document.getElementById("header");
  header.textContent = "Flatbooks Technical Books";

  // ✅ SELECT LIST
  const bookList = document.getElementById("book-list");

  // ✅ REMOVE TEMPLATE ITEM
  const oldItem = document.getElementById("delete-this");
  if (oldItem) oldItem.remove();

  // ✅ LOOP THROUGH BOOKS
  books.forEach(function (book) {

    const li = document.createElement("li");

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = book.author;

    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;

    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(img);

    bookList.appendChild(li);

  });

});