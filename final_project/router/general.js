const axios = require('axios');

/* Task 10: Get all books – Using async/await */
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:5000/');
        console.log(JSON.stringify(response.data, null, 4));
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error.message);
        return null;
    }
}

/* Task 11: Get book details based on ISBN – Using Promise */
function getBookByISBN(isbn) {
    axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(function(response) {
        console.log(JSON.stringify(response.data, null, 4));
        return response.data;
    })
    .catch(function(error) {
        console.error("Error fetching book by ISBN:", error.message);
        return null;
    });
}

/* Task 12: Get book details based on Author – Using Promise */
function getBookByAuthor(author) {
    axios.get(`http://localhost:5000/author/${author}`)
    .then(function(response) {
        console.log(JSON.stringify(response.data, null, 4));
        return response.data;
    })
    .catch(function(error) {
        console.error("Error fetching books by author:", error.message);
        return null;
    });
}

/* Task 13: Get book details based on Title – Using Promise */
function getBookByTitle(title) {
    axios.get(`http://localhost:5000/title/${title}`)
    .then(function(response) {
        console.log(JSON.stringify(response.data, null, 4));
        return response.data;
    })
    .catch(function(error) {
        console.error("Error fetching books by title:", error.message);
        return null;
    });
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};

/* Testing the functions */
getAllBooks();
getBookByISBN(1);
getBookByAuthor("Chinua Achebe");
getBookByTitle("Things Fall Apart");
