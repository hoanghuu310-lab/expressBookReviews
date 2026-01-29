/**
 * General.js
 * Final Implementation: Book Retrieval with Axios
 * Includes robust Error Handling and Input Validation.
 */
const axios = require('axios');

/**
 * Task 10: Get all books available in the shop
 * Method: GET
 * Implementation: Async/Await
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
 * Implementation: Promise Callbacks
 */
function getBookByISBN(isbn) {
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
 * Implementation: Promise Callbacks
 */
function getBookByAuthor(author) {
    if (!author) {
        console.error("Task 12 Error: Author name is required.");
        return;
    }

    axios.get(`http://localhost:5000/author/${author}`)
    .then(response => {
        // Check if data is not empty
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
 * Implementation: Promise Callbacks
 */
function getBookByTitle(title) {
    if (!title) {
        console.error("Task 13 Error: Title is required.");
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
