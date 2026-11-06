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
5. **Screenshot 05 – Pagination Using Limit and Offset** (`05-pagination-page-1.png`)
6. **Screenshot 06 – Pagination Using Limit and Offset** (`06-pagination-page-2.png`)
7. **Screenshot 07 – Filter Books by Price Range** (`07-price-range-filter.png`)
8. **Screenshot 08 – Get Book by ID** (`08-get-book-by-id.png`)

### 2. POST Requests – Create and Validation

9. **Screenshot 09 – Add a New Book Successfully** (`09-post-create-book.png`)
10. **Screenshot 10 – Validation Error for Missing Fields** (`10-post-missing-fields.png`)
11. **Screenshot 11 – Validation Error for Invalid Price** (`11-post-invalid-price.png`)

### 3. PUT Requests – Update

12. **Screenshot 12 – Update an Existing Book** (`12-put-update-book.png`)
13. **Screenshot 13 – Update a Non-Existing Book** (`13-put-book-not-found.png`)

### 4. DELETE Requests

14. **Screenshot 14 – Delete an Existing Book** (`14-delete-book.png`)
15. **Screenshot 15 – Delete a Non-Existing Book** (`15-delete-book-not-found.png`)

### 5. Additional Error Testing

16. **Screenshot 16 – Invalid Sorting Parameter** (`16-invalid-sorting.png`)
17. **Screenshot 17 – Invalid Book ID** (`17-invalid-book-id.png`)

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

