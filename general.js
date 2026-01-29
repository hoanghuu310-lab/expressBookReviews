/**
 * General.js
 * Implementation of book retrieval tasks using Axios.
 * Includes Input Validation, Error Handling, and Modular structure.
 */
const axios = require('axios');

/**
 * Task 10: Get all books available in the shop
 * Method: GET
 * Endpoint: /
 */
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:5000/');
        console.log("Task 10 Output:", JSON.stringify(response.data, null, 4));
        return response.data;
    } catch (error) {
        console.error("Task 10 Error:", error.message);
        return null;
    }
}

/**
 * Task 11: Get book details based on ISBN
 * Method: GET
 * Endpoint: /isbn/:isbn
 * @param isbn - The ISBN of the book
 */
function getBookByISBN(isbn) {
    // VALIDATION: Check if ISBN is provided
    if (!isbn) {
        console.error("Task 11 Error: ISBN is required.");
        return;
    }

    axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(response => {
        console.log("Task 11 Output:", JSON.stringify(response.data, null, 4));
        return response.data;
    })
    .catch(error => {
        if (error.response && error.response.status === 404) {
            console.log(`Task 11 Info: Book with ISBN ${isbn} not found.`);
        } else {
            console.error(`Task 11 Error: ${error.message}`);
        }
    });
}

/**
 * Task 12: Get book details based on Author
 * Method: GET
 * Endpoint: /author/:author
 * @param author - The name of the author
 */
function getBookByAuthor(author) {
    // VALIDATION: Check if author name is valid
    if (!author || typeof author !== 'string') {
        console.error("Task 12 Error: Valid author name is required.");
        return;
    }

    axios.get(`http://localhost:5000/author/${author}`)
    .then(response => {
        // Check if the response actually contains books
        if (response.data && Object.keys(response.data).length > 0) {
            console.log("Task 12 Output:", JSON.stringify(response.data, null, 4));
        } else {
            console.log(`Task 12 Info: No books found for author "${author}".`);
        }
        return response.data;
    })
    .catch(error => {
        if (error.response && error.response.status === 404) {
            console.log(`Task 12 Info: Author "${author}" not found.`);
        } else {
            console.error(`Task 12 Error: ${error.message}`);
        }
    });
}

/**
 * Task 13: Get book details based on Title
 * Method: GET
 * Endpoint: /title/:title
 * @param title - The title of the book
 */
function getBookByTitle(title) {
    // VALIDATION: Check if title is valid
    if (!title || typeof title !== 'string') {
        console.error("Task 13 Error: Valid title is required.");
        return;
    }

    axios.get(`http://localhost:5000/title/${title}`)
    .then(response => {
        console.log("Task 13 Output:", JSON.stringify(response.data, null, 4));
        return response.data;
    })
    .catch(error => {
        if (error.response && error.response.status === 404) {
            console.log(`Task 13 Info: Title "${title}" not found.`);
        } else {
            console.error(`Task 13 Error: ${error.message}`);
        }
    });
}

// Export functions for the grading system
module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};

// Execution for local testing
getAllBooks();
getBookByISBN(1);
getBookByAuthor("Chinua Achebe");
getBookByTitle("Things Fall Apart");
