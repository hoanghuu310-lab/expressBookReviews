/**
 * General.js
 * Modular implementation of book retrieval tasks using Axios.
 * Includes separate error handling function for better maintainability.
 */
const axios = require('axios');

/**
 * Helper function to handle errors centrally (Modularization)
 * @param {Object} error - The error object from Axios
 * @param {String} context - Context string for logging
 */
function handleAxiosError(error, context) {
    if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 404) {
            console.log(`${context} Info: Resource not found (404).`);
        } else {
            console.error(`${context} Error: Server returned status ${error.response.status}.`);
        }
    } else if (error.request) {
        // The request was made but no response was received
        console.error(`${context} Error: No response received from server.`);
    } else {
        // Something happened in setting up the request
        console.error(`${context} Error: ${error.message}`);
    }
}

// Task 10: Get all books (Async/Await)
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:5000/');
        console.log("Task 10 Output:", JSON.stringify(response.data, null, 4));
        return response.data;
    } catch (error) {
        handleAxiosError(error, "Task 10");
        return null;
    }
}

// Task 11: Get book by ISBN (Promise)
function getBookByISBN(isbn) {
    axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(response => {
        console.log("Task 11 Output:", JSON.stringify(response.data, null, 4));
        return response.data;
    })
    .catch(error => {
        handleAxiosError(error, `Task 11 (ISBN ${isbn})`);
    });
}

// Task 12: Get book by Author (Promise)
function getBookByAuthor(author) {
    axios.get(`http://localhost:5000/author/${author}`)
    .then(response => {
        if (response.data && Object.keys(response.data).length > 0) {
            console.log("Task 12 Output:", JSON.stringify(response.data, null, 4));
        } else {
            console.log(`Task 12 Info: No books found for author ${author}.`);
        }
        return response.data;
    })
    .catch(error => {
        handleAxiosError(error, `Task 12 (Author ${author})`);
    });
}

// Task 13: Get book by Title (Promise)
function getBookByTitle(title) {
    axios.get(`http://localhost:5000/title/${title}`)
    .then(response => {
        console.log("Task 13 Output:", JSON.stringify(response.data, null, 4));
        return response.data;
    })
    .catch(error => {
        handleAxiosError(error, `Task 13 (Title ${title})`);
    });
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};

// Execution for verification
getAllBooks();
getBookByISBN(1);
getBookByAuthor("Chinua Achebe");
getBookByTitle("Things Fall Apart");
