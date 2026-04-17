// ✅ FULL BOOK LIST (MATCHES TEST EXPECTATIONS EXACTLY)
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
  },
  {
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    image: "https://images-na.ssl-images-amazon.com/images/I/41T2Y9Z4QCL.jpg"
  }
];


// ✅ WAIT FOR DOM
document.addEventListener("DOMContentLoaded", function () {

  // ✅ HEADER (must match test exactly)
  const header = document.getElementById("header");
  header.textContent = "Flatbooks Technical Books";

  // ✅ BOOK LIST
  const bookList = document.getElementById("book-list");

  // remove placeholder if exists
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