const axios = require('axios');

// Task 10: Get all books – Using async/await
const getAllBooks = async () => {
    try {
        const response = await axios.get('http://localhost:5000/');
        console.log(JSON.stringify(response.data, null, 4));
    } catch (error) {
        if (error.response) {
            console.error(`Error ${error.response.status}: ${error.response.data.message || error.message}`);
        } else {
            console.error("Error fetching all books:", error.message);
        }
    }
}

// Task 11: Search by ISBN – Using Promises
const getBookByISBN = (isbn) => {
    axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(response => {
        console.log(JSON.stringify(response.data, null, 4));
    })
    .catch(error => {
        if (error.response && error.response.status === 404) {
            console.error(`Book with ISBN ${isbn} not found.`);
        } else {
            console.error(`Error fetching book with ISBN ${isbn}:`, error.message);
        }
    });
}

// Task 12: Search by Author
const getBookByAuthor = (author) => {
    axios.get(`http://localhost:5000/author/${author}`)
    .then(response => {
        console.log(JSON.stringify(response.data, null, 4));
    })
    .catch(error => {
        if (error.response && error.response.status === 404) {
            console.error(`No books found for author: ${author}`);
        } else {
            console.error(`Error fetching books by author ${author}:`, error.message);
        }
    });
}

// Task 13: Search by Title
const getBookByTitle = (title) => {
    axios.get(`http://localhost:5000/title/${title}`)
    .then(response => {
        console.log(JSON.stringify(response.data, null, 4));
    })
    .catch(error => {
        if (error.response && error.response.status === 404) {
             console.error(`No books found with title: ${title}`);
        } else {
            console.error(`Error fetching books with title ${title}:`, error.message);
        }
    });
}

// Execute functions for demonstration
getAllBooks();
getBookByISBN(1);
getBookByAuthor("Chinua Achebe");
getBookByTitle("Things Fall Apart");
