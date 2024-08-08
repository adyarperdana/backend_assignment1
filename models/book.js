const books = require("../data/Books.json");

class Book {
  static getAllBook() { 
    return books;
  }

  static getBookById(id) { 
    return books.find((el) => el.id === Number(id));
  }
}

module.exports = Book;
