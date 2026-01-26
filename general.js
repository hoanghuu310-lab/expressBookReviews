/**
 * General.js
 * Implementation of book retrieval tasks with robust error handling.
 */
const axios = require('axios');

// Task 10: Get all books (Async/Await)
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

// Task 11: Get book by ISBN (Promise)
function getBookByISBN(isbn) {
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
        if (error.response && error.response.status === 404) {
            console.log(`Task 12 Info: Author ${author} not found.`);
        } else {
            console.error(`Task 12 Error: ${error.message}`);
        }
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
        if (error.response && error.response.status === 404) {
            console.log(`Task 13 Info: Title "${title}" not found.`);
        } else {
            console.error(`Task 13 Error: ${error.message}`);
        }
    });
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};

// Test
getAllBooks();
getBookByISBN(1);
getBookByAuthor("Chinua Achebe");
getBookByTitle("Things Fall Apart");
