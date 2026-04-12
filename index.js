const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here! // ===============================
// Task: Flatbook DOM Manipulation
// ===============================

// 1. Change the header title
let header = document.querySelector("h1");
header.textContent = "Flatbook Library";

// 2. Books data (usually already provided in lab, but safe example)
let books = [
  {
    title: "Book One",
    author: "Author One",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Book Two",
    author: "Author Two",
    image: "https://via.placeholder.com/150"
  }
];

// 3. Select container (IMPORTANT - adjust if lab uses different id/class)
let bookContainer = document.querySelector("#book-list");

// 4. Loop through books and create elements
books.forEach((book) => {
  // Create elements
  let bookCard = document.createElement("div");
  let bookTitle = document.createElement("h3");
  let bookAuthor = document.createElement("p");
  let bookImage = document.createElement("img");

  // Assign content
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.image;

  // Build structure
  bookCard.appendChild(bookImage);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);

  // Append to main container
  bookContainer.appendChild(bookCard);
});

