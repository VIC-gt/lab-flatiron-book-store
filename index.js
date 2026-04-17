// index.js

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Task 1: Update the header with id 'header' to exact text "Flatbooks Technical Books"
  const header = document.getElementById('header');
  if (header) {
    header.textContent = 'Flatbooks Technical Books';
  }
  
  // Task 2: Get the book data from the existing data structure (provided in HTML)
  const booksData = [
    {
      title: 'Eloquent JavaScript: A Modern Introduction to Programming',
      author: 'Marijn Haverbeke',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81NRjiL4WKL.jpg'
    },
    {
      title: 'You Don\'t Know JS',
      author: 'Kyle Simpson',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41fwbRoP7YL.jpg'
    },
    {
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51zN1jxYgYL.jpg'
    },
    {
      title: 'HTML and CSS: Design and Build Websites',
      author: 'Jon Duckett',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81QRQOKXEbL.jpg'
    }
  ];
  
  // Task 3: Select the #book-list element
  const bookList = document.getElementById('book-list');
  
  // Remove the existing "delete-this" li
  const deleteLi = document.getElementById('delete-this');
  if (deleteLi && deleteLi.parentNode) {
    deleteLi.parentNode.removeChild(deleteLi);
  }
  
  // Task 4: Create and append book elements for each book
  booksData.forEach(function(book) {
    // Create book container (li element)
    const bookContainer = document.createElement('li');
    bookContainer.className = 'book-container';
    
    // Create book image
    const bookImage = document.createElement('img');
    bookImage.className = 'book-image';
    bookImage.src = book.image;
    bookImage.alt = book.title;
    
    // Create book title
    const bookTitle = document.createElement('h3');
    bookTitle.className = 'book-title';
    bookTitle.textContent = book.title;
    
    // Create book author
    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'book-author';
    bookAuthor.textContent = book.author;
    
    // Append elements in correct order: image -> title -> author
    bookContainer.appendChild(bookImage);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    
    // Append book container to #book-list
    bookList.appendChild(bookContainer);
  });
  
});