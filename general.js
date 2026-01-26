/**
 * General.js
 * Implementation of book retrieval tasks using Axios.
 * This file contains functions to get books by list, ISBN, Author, and Title.
 */

const axios = require('axios');

/**
 * Task 10: Get all books available in the shop.
 * Method: GET
 * Implementation: Uses async/await syntax.
 * Output: Logs the list of books to the console.
 */
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:5000/');
        console.log("Successfully retrieved all books:");
        console.log(JSON.stringify(response.data, null, 4));
        return response.data;
    } catch (error) {
        console.error("Error retrieving book list:", error.message);
        return null;
    }
}

/**
 * Task 11: Get book details based on ISBN.
 * Method: GET
 * Implementation: Uses Promise callbacks (then/catch).
 * @param {number|string} isbn - The ISBN of the book to retrieve.
 */
function getBookByISBN(isbn) {
    // Making a request to the server with the specific ISBN
    axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(response => {
        // Handle success
        console.log(`Successfully retrieved book with ISBN ${isbn}:`);
        console.log(JSON.stringify(response.data, null, 4));
        return response.data;
    })
    .catch(error => {
        // Handle error (e.g., book not found)
        console.error(`Error retrieving book with ISBN ${isbn}:`, error.message);
        return null;
    });
}

/**
 * Task 12: Get book details based on Author.
 * Method: GET
 * Implementation: Uses Promise callbacks.
 * @param {string} author - The name of the author.
 */
function getBookByAuthor(author) {
    axios.get(`http://localhost:5000/author/${author}`)
    .then(response => {
        console.log(`Successfully retrieved books by author ${author}:`);
        console.log(JSON.stringify(response.data, null, 4));
        return response.data;
    })
    .catch(error => {
        console.error(`Error retrieving books by author ${author}:`, error.message);
        return null;
    });
}

/**
 * Task 13: Get book details based on Title.
 * Method: GET
 * Implementation: Uses Promise callbacks.
 * @param {string} title - The title of the book.
 */
function getBookByTitle(title) {
    axios.get(`http://localhost:5000/title/${title}`)
    .then(response => {
        console.log(`Successfully retrieved books with title ${title}:`);
        console.log(JSON.stringify(response.data, null, 4));
        return response.data;
    })
    .catch(error => {
        console.error(`Error retrieving books with title ${title}:`, error.message);
        return null;
    });
}

// Export functions for the grading system
module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};

// Execution of functions for demonstration purposes
getAllBooks();
getBookByISBN(1);
getBookByAuthor("Chinua Achebe");
getBookByTitle("Things Fall Apart");
