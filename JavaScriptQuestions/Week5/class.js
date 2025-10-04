class Book {
  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
  }
}
// It is still called with 'new' but offers a cleaner, more familiar structure.
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218)
console.log(book3)
/*
Book {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "pages": 218
}
*/