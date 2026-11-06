# Lab 3: REST API, Query Parameters, Validation & Debugging

## Project Information

**Subject:** Backend Development Fundamentals  
**Lab:** Lab 3  
**Year:** II  
**Term:** II  
**Student Name:** Bhuvanesh Damera  

## Project Description

This project implements a RESTful API using Node.js, Express.js and SQLite. It demonstrates CRUD operations, query parameters, searching, sorting, pagination, price filtering, input validation and error handling.

## Technologies Used

- Node.js
- Express.js
- SQLite
- JavaScript
- Postman
- GitHub
- Render (Deployment)

## Project Links

**GitHub Repository:**  
https://github.com/Manu-Hub330/Bhuvanesh-BDF-LAB-3

**Live Deployment:**  
https://bhuvanesh-bdf-lab-3-2.onrender.com

## API Testing Screenshots

All API endpoints were tested using Postman. The following screenshots demonstrate the functionality and expected responses.

### 1. GET Requests

1. **Screenshot 01 – Get All Books** (`01-get-all-books.png`)
2. **Screenshot 02 – Search Books** (`02-search-books.png`)
3. **Screenshot 03 – Sort Books in Ascending Order** (`03-sort-ascending.png`)
4. **Screenshot 04 – Sort Books in Descending Order** (`04-sort-descending.png`)
5. **Screenshot 05 – Pagination Using Limit and Offset** (`05-pagination.png`)
6. **Screenshot 06 – Filter Books by Price Range** (`06-price-range-filter.png`)
7. **Screenshot 07 – Get Book by ID** (`07-get-book-by-id.png`)

### 2. POST Requests – Create and Validation

8. **Screenshot 08 – Add a New Book Successfully** (`08-post-create-book.png`)
9. **Screenshot 09 – Validation Error for Missing Fields** (`09-post-missing-fields.png`)
10. **Screenshot 10 – Validation Error for Invalid Price** (`10-post-invalid-price.png`)

### 3. PUT Requests – Update

11. **Screenshot 11 – Update an Existing Book** (`11-put-update-book.png`)
12. **Screenshot 12 – Update a Non-Existing Book** (`12-put-book-not-found.png`)

### 4. DELETE Requests

13. **Screenshot 13 – Delete an Existing Book** (`13-delete-book.png`)
14. **Screenshot 14 – Delete a Non-Existing Book** (`14-delete-book-not-found.png`)

### 5. Additional Error Testing

15. **Screenshot 15 – Invalid Sorting Parameter** (`15-invalid-sorting.png`)
16. **Screenshot 16 – Invalid Book ID** (`16-invalid-book-id.png`)

## Debugging Exercises

The project also covers the following debugging scenarios:

1. **EADDRINUSE:** Identifying and resolving port conflicts.
2. **Wrong Import Path:** Correcting incorrect module import paths.
3. **No Such Table:** Identifying and fixing SQLite table name errors.
4. **Missing Await:** Correcting asynchronous operations by using the await keyword.

## Features Implemented

- Retrieve all books.
- Search books using query parameters.
- Sort books by price.
- Implement pagination using limit and offset.
- Filter books using minimum and maximum prices.
- Retrieve individual books using their IDs.
- Add new books using POST.
- Update existing books using PUT.
- Delete books using DELETE.
- Validate incoming request data.
- Handle invalid requests and missing records.
- Debug common backend development errors.

## Conclusion

This project demonstrates the practical implementation of REST API development using Node.js, Express.js and SQLite. It provides experience in handling HTTP methods, query parameters, CRUD operations, validation, error handling, database interactions and debugging. All implemented API functionalities were tested using Postman and the application was deployed online.

