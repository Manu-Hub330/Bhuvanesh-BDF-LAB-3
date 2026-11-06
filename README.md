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
[https://github.com/Manu-Hub330/Bhuvanesh-BDF-LAB-3](https://github.com/Manu-Hub330/Bhuvanesh-BDF-LAB-3)

**Live Deployment:**  
[https://bhuvanesh-bdf-lab-3-2.onrender.com](https://bhuvanesh-bdf-lab-3-2.onrender.com)

## API Testing Screenshots

All API endpoints were tested using Postman. The following screenshots demonstrate the functionality and expected responses.

### 1. GET Requests

**Screenshot 01 – Get All Books**

![Get All Books](screenshots/01-get-all-books.png)

**Screenshot 02 – Search Books**

![Search Books](screenshots/02-search-books.png)

**Screenshot 03 – Sort Books in Ascending Order**

![Sort Ascending](screenshots/03-sort-ascending.png)

**Screenshot 04 – Sort Books in Descending Order**

![Sort Descending](screenshots/04-sort-descending.png)

**Screenshot 05 – Pagination (First Page)**

![Pagination Page 1](screenshots/05-pagination-page-1.png)

**Screenshot 06 – Pagination (Second Page)**

![Pagination Page 2](screenshots/06-pagination-page-2.png)

**Screenshot 07 – Filter Books by Price Range**

![Price Range Filter](screenshots/07-price-range-filter.png)

**Screenshot 08 – Get Book by ID**

![Get Book by ID](screenshots/08-get-book-by-id.png)

### 2. POST Requests – Create and Validation

**Screenshot 09 – Add a New Book Successfully**

![POST Create Book](screenshots/09-post-create-book.png)

**Screenshot 10 – Validation Error for Missing Fields**

![POST Missing Fields](screenshots/10-post-missing-fields.png)

**Screenshot 11 – Validation Error for Invalid Price**

![POST Invalid Price](screenshots/11-post-invalid-price.png)

### 3. PUT Requests – Update

**Screenshot 12 – Update an Existing Book**

![PUT Update Book](screenshots/12-put-update-book.png)

**Screenshot 13 – Update a Non-Existing Book**

![PUT Book Not Found](screenshots/13-put-book-not-found.png)

### 4. DELETE Requests

**Screenshot 14 – Delete an Existing Book**

![DELETE Book](screenshots/14-delete-book.png)

**Screenshot 15 – Delete a Non-Existing Book**

![DELETE Book Not Found](screenshots/15-delete-book-not-found.png)

### 5. Additional Error Testing

**Screenshot 16 – Invalid Sorting Parameter**

![Invalid Sorting](screenshots/16-invalid-sorting.png)

**Screenshot 17 – Invalid Book ID**

![Invalid Book ID](screenshots/17-invalid-book-id.png)

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