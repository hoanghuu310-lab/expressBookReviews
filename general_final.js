/**
 * General.js Implementation
 * This file handles Book Retrieval Tasks using Axios.
 */
const axios = require('axios');

// Task 10: Get all books (Async/Await)
// Expl: Fetch the list of all available books from the shop
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:5000/');
        console.log("Task 10 Output:", JSON.stringify(response.data, null, 4));
        return response.data;
    } catch (error) {
        console.error("Task 10 Error:", error.message);
    }
}

// Task 11: Get book by ISBN (Promise)
// Expl: Search for a specific book using its ISBN code
function getBookByISBN(isbn) {
    axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(response => {
        console.log("Task 11 Output:", JSON.stringify(response.data, null, 4));
    })
    .catch(error => {
        console.error("Task 11 Error:", error.message);
    });
}

// Task 12: Get book by Author (Promise)
// Expl: Retrieve all books written by a specific author
function getBookByAuthor(author) {
    axios.get(`http://localhost:5000/author/${author}`)
    .then(response => {
        console.log("Task 12 Output:", JSON.stringify(response.data, null, 4));
    })
    .catch(error => {
        console.error("Task 12 Error:", error.message);
    });
}

// Task 13: Get book by Title (Promise)
// Expl: Retrieve book details using the title
function getBookByTitle(title) {
    axios.get(`http://localhost:5000/title/${title}`)
    .then(response => {
        console.log("Task 13 Output:", JSON.stringify(response.data, null, 4));
    })
    .catch(error => {
        console.error("Task 13 Error:", error.message);
    });
}

// Export functions to be visible for grading testing
module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};

// Test Execution
getAllBooks();
getBookByISBN(1);
getBookByAuthor("Chinua Achebe");
getBookByTitle("Things Fall Apart");
