const axios = require('axios');

// Task 10: Get all books – Using async/await
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:5000/');
        console.log(JSON.stringify(response.data, null, 4));
        return response.data;
    } catch (error) {
        console.error("Error fetching all books:", error.message);
        return null;
    }
}

// Task 11: Search by ISBN – Using Promises
function getBookByISBN(isbn) {
    return axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(response => {
        console.log(JSON.stringify(response.data, null, 4));
        return response.data;
    })
    .catch(error => {
        console.error(`Error fetching book with ISBN ${isbn}:`, error.message);
        return null;
    });
}

// Task 12: Search by Author
function getBookByAuthor(author) {
    return axios.get(`http://localhost:5000/author/${author}`)
    .then(response => {
        console.log(JSON.stringify(response.data, null, 4));
        return response.data;
    })
    .catch(error => {
        console.error(`Error fetching books by author ${author}:`, error.message);
        return null;
    });
}

// Task 13: Search by Title
function getBookByTitle(title) {
    return axios.get(`http://localhost:5000/title/${title}`)
    .then(response => {
        console.log(JSON.stringify(response.data, null, 4));
        return response.data;
    })
    .catch(error => {
        console.error(`Error fetching books with title ${title}:`, error.message);
        return null;
    });
}

// Export functions for grading system to use
module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};

// Execute for demonstration
getAllBooks();
getBookByISBN(1);
getBookByAuthor("Chinua Achebe");
getBookByTitle("Things Fall Apart");
