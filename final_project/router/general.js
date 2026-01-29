const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Đăng ký người dùng mới
public_users.post("/register", (req,res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!isValid(username)) { 
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "User successfully registred. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});    
    }
  } 
  return res.status(404).json({message: "Unable to register user."});
});

// Task 10: Lấy danh sách sách bằng Promise
public_users.get('/', function (req, res) {
    const getBooks = new Promise((resolve, reject) => {
        resolve(res.send(JSON.stringify({books}, null, 4)));
    });
    getBooks.then(() => console.log("Promise for Task 10 resolved"));
});

// Task 11: Lấy chi tiết sách theo ISBN bằng Promise
public_users.get('/isbn/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    const getBookByIsbn = new Promise((resolve, reject) => {
        if (books[isbn]) {
            resolve(res.send(JSON.stringify(books[isbn], null, 4)));
        } else {
            reject(res.status(404).json({message: "Book not found"}));
        }
    });
    getBookByIsbn.then(() => console.log("Promise for Task 11 resolved"));
});

// Task 12: Lấy sách theo Tác giả bằng Promise
public_users.get('/author/:author', function (req, res) {
    const author = req.params.author;
    const getBooksByAuthor = new Promise((resolve, reject) => {
        let booksByAuthor = [];
        Object.keys(books).forEach((key) => {
            if (books[key].author === author) {
                booksByAuthor.push({ "isbn": key, ...books[key] });
            }
        });
        resolve(res.send(JSON.stringify({booksbyauthor: booksByAuthor}, null, 4)));
    });
    getBooksByAuthor.then(() => console.log("Promise for Task 12 resolved"));
});

// Task 13: Lấy sách theo Tiêu đề bằng Promise
public_users.get('/title/:title', function (req, res) {
    const title = req.params.title;
    const getBooksByTitle = new Promise((resolve, reject) => {
        let booksByTitle = [];
        Object.keys(books).forEach((key) => {
            if (books[key].title === title) {
                booksByTitle.push({ "isbn": key, ...books[key] });
            }
        });
        resolve(res.send(JSON.stringify({booksbytitle: booksByTitle}, null, 4)));
    });
    getBooksByTitle.then(() => console.log("Promise for Task 13 resolved"));
});

// Lấy đánh giá của sách
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  if (books[isbn]) {
    res.send(JSON.stringify(books[isbn].reviews, null, 4));
  } else {
    res.status(404).json({message: "Book not found"});
  }
});

module.exports.general = public_users;
