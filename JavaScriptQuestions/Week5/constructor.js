// 1. Define the Constructor Function
function Book(title, author, pages) {
  // Step 2 & 3: 'this' points to the new object, and properties are assigned to it.
  this.title = title
  this.author = author
  this.pages = pages
  
  this.getInfo = function() {
    return `${this.title} by ${this.author}`
  }
}

// 2. Use the 'new' Keyword to Create Instances
const book1 = new Book('1984', 'George Orwell', 328) // Creates instance 1
const book2 = new Book('Brave New World', 'Aldous Huxley', 311) // Creates instance 2

console.log(book1.title)    // Output: 1984
console.log(book2.getInfo()) // Output: Brave New World by Aldous Huxley