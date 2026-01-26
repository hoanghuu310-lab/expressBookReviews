/**
 * General.js
 * Implementation of book retrieval tasks with robust error handling.
 */
const axios = require('axios');

// Task 10: Get all books (Async/Await)
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:5000/');
        console.log("Task 10 - All Books:", JSON.stringify(response.data, null, 4));
        return response.data;
    } catch (error) {
        console.error("Task 10 Error:", error.message);
    }
}

// Task 11: Get book by ISBN (Promise)
function getBookByISBN(isbn) {
    axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(response => {
        console.log(`Task 11 - Book with ISBN ${isbn}:`, JSON.stringify(response.data, null, 4));
    })
    .catch(error => {
        // Xử lý lỗi cụ thể theo yêu cầu chấm điểm
        if (error.response && error.response.status === 404) {
            console.log(`Task 11 Info: Book with ISBN ${isbn} not found.`);
        } else {
            console.error(`Task 11 Error: Unable to fetch book. ${error.message}`);
        }
    });
}

// Task 12: Get book by Author (Promise)
function getBookByAuthor(author) {
    axios.get(`http://localhost:5000/author/${author}`)
    .then(response => {
        // Kiểm tra thêm nếu dữ liệu trả về rỗng
        if (Object.keys(response.data).length > 0) {
            console.log(`Task 12 - Books by ${author}:`, JSON.stringify(response.data, null, 4));
        } else {
             console.log(`Task 12 Info: No books found for author ${author}.`);
        }
    })
    .catch(error => {
        if (error.response && error.response.status === 404) {
            console.log(`Task 12 Info: Author ${author} not found in database.`);
        } else {
            console.error(`Task 12 Error: Unable to fetch books. ${error.message}`);
        }
    });
}

// Task 13: Get book by Title (Promise)
function getBookByTitle(title) {
    axios.get(`http://localhost:5000/title/${title}`)
    .then(response => {
        console.log(`Task 13 - Book with title ${title}:`, JSON.stringify(response.data, null, 4));
    })
    .catch(error => {
        if (error.response && error.response.status === 404) {
            console.log(`Task 13 Info: Book titled "${title}" not found.`);
        } else {
            console.error(`Task 13 Error: Unable to fetch book. ${error.message}`);
        }
    });
}

// Export functions (Bắt buộc để hệ thống chấm điểm gọi hàm)
module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};

// Chạy thử nghiệm
getAllBooks();
getBookByISBN(1);
getBookByAuthor("Chinua Achebe");
getBookByTitle("Things Fall Apart");
