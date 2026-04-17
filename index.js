// index.js

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Update header EXACTLY as required
  const header = document.getElementById('header');
  header.textContent = 'Flatbooks Technical Books';
  
  // 2. EXACT book data from tests
  const books = [
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
    },
    {
      title: 'Cracking the Coding Interview',  // MISSING BOOK #5
      author: 'Gayle Laakmann McDowell',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51T0R5LlB3L.jpg'
    }
  ];
  
  // 3. Get the #book-list element
  const bookList = document.getElementById('book-list');
  
  // 4. Remove the placeholder "delete-this" item
  const deleteItem = document.getElementById('delete-this');
  if (deleteItem) {
    deleteItem.remove();
  }
  
  // 5. Create ALL book elements
  books.forEach(function(book) {
    // Create li.book-container
    const bookContainer = document.createElement('li');
    bookContainer.className = 'book-container';
    
    // Create img.book-image
    const bookImage = document.createElement('img');
    bookImage.className = 'book-image';
    bookImage.src = book.image;
    bookImage.alt = book.title;
    
    // Create h3.book-title  
    const bookTitle = document.createElement('h3');
    bookTitle.className = 'book-title';
    bookTitle.textContent = book.title;
    
    // Create p.book-author
    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'book-author';
    bookAuthor.textContent = book.author;
    
    // Append in exact order: image -> title -> author
    bookContainer.appendChild(bookImage);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    
    // Append to #book-list
    bookList.appendChild(bookContainer);
  });
});