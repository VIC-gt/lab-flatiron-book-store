const books = [
  {
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    image: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    title: "JavaScript and JQuery: Interactive Front-End Web Development",
    author: "Jon Duckett",
    image: "https://images-na.ssl-images-amazon.com/images/I/51GRnTVFaFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Learning Web Design: A Beginner's Guide",
    author: "Jennifer Niederst Robbins",
    image: "https://images-na.ssl-images-amazon.com/images/I/51bg9QhCLAL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    image: "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln+L._SX348_BO1,204,203,200_.jpg"
  }
];

// Step 1: Update the header
document.querySelector('#header').textContent = "Flatbooks Technical Books";

// Step 2: Remove the placeholder li
const deleteThis = document.querySelector('#delete-this');
if (deleteThis) deleteThis.remove();

// Step 3: Add each book to the list
const bookList = document.querySelector('#book-list');

books.forEach((book) => {
  const bookContainer = document.createElement('li');

  const bookImage = document.createElement('img');
  bookImage.src = book.image;

  const bookTitle = document.createElement('h2');
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = book.author;

  bookContainer.appendChild(bookImage);
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);

  bookList.appendChild(bookContainer);
});