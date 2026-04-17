// index.js

// Book catalog data
const bookstore = {
  storeName: "Flatbooks",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
    },
    {
      title: "1984",
      author: "George Orwell",
      image: "https://images.unsplash.com/photo-1540206395-68808572332f?w=400&h=600&fit=crop"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop"
    }
  ]
};

// Step 1: Update the existing title on the page
function updateStoreTitle() {
  const headerElement = document.querySelector('h1');
  if (headerElement) {
    headerElement.textContent = bookstore.storeName;
  }
}

// Step 2: Create book elements and append to DOM
function createBookElements() {
  // Select the container where books will be appended
  const bookContainer = document.querySelector('.books-container') || 
                       document.querySelector('main') || 
                       document.body;
  
  // Create books section if it doesn't exist
  let booksSection = document.querySelector('.books-section');
  if (!booksSection) {
    booksSection = document.createElement('section');
    booksSection.className = 'books-section';
    const booksTitle = document.createElement('h2');
    booksTitle.textContent = 'Our Catalog';
    booksSection.appendChild(booksTitle);
    bookContainer.appendChild(booksSection);
  }
  
  // Loop through each book and create elements
  bookstore.books.forEach(book => {
    // Create book container
    const bookElement = document.createElement('div');
    bookElement.className = 'book-container';
    
    // Create book title
    const bookTitle = document.createElement('h3');
    bookTitle.className = 'book-title';
    bookTitle.textContent = book.title;
    
    // Create book author
    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'book-author';
    bookAuthor.textContent = `by ${book.author}`;
    
    // Create book image
    const bookImage = document.createElement('img');
    bookImage.className = 'book-image';
    bookImage.src = book.image;
    bookImage.alt = `${book.title} by ${book.author}`;
    
    // Append elements to book container
    bookElement.appendChild(bookImage);
    bookElement.appendChild(bookTitle);
    bookElement.appendChild(bookAuthor);
    
    // Append book container to books section
    booksSection.appendChild(bookElement);
  });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  updateStoreTitle();
  createBookElements();
});