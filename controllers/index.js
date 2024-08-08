const Book = require("../models/book");
const path = require('path');


exports.showTableAllBooks = (req, res) => {
  const books = Book.getAllBook(); 
  res.render("books", { books });
};

exports.showJSONAllBooks = (req, res) => {
  const books = Book.getAllBook(); 
  res.send(books)
};

exports.showBookById = (req, res) => {
  const { id } = req.params;
  const book = Book.getBookById(id); 

  if (!book) {
    res.status(404).send(`Book with id ${id} is not found`);
  } else {
    res.status(200).json(book);
  }
};


