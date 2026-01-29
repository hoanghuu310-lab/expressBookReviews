const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req,res) => {
  const { username, password } = req.body;
  if (username && password) {
    if (!users.find(u => u.username === username)) {
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "User successfully registred. Now you can login"});
    }
    return res.status(404).json({message: "User already exists!"});
  }
  return res.status(404).json({message: "Unable to register user."});
});

// Task 10: Get book list using Promises
public_users.get('/', function (req, res) {
  const getBooks = new Promise((resolve) => {
    resolve(res.status(200).json(books));
  });
  return getBooks;
});

// Task 11: Get book details by ISBN using Promises
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  const getByIsbn = new Promise((resolve, reject) => {
    if (books[isbn]) {
      resolve(res.status(200).json(books[isbn]));
    } else {
      reject(res.status(404).json({message: "Book not found"}));
    }
  });
  return getByIsbn;
});

// Task 12: Get book details by author using Promises
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author;
  const getByAuthor = new Promise((resolve) => {
    let results = Object.values(books).filter(b => b.author === author);
    resolve(res.status(200).json({booksbyauthor: results}));
  });
  return getByAuthor;
});

// Task 13: Get book details by title using Promises
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title;
  const getByTitle = new Promise((resolve) => {
    let results = Object.values(books).filter(b => b.title === title);
    resolve(res.status(200).json({booksbytitle: results}));
  });
  return getByTitle;
});

public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  if (books[isbn]) {
    return res.status(200).json(books[isbn].reviews);
  }
  return res.status(404).json({message: "Not found"});
});

module.exports.general = public_users;
