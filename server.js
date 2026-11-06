const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
const db = new sqlite3.Database('./books.db', (err) => {
    if (err) {
        console.error('Database connection error:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

// Create table and insert 10 books if database is empty
db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            price REAL NOT NULL
        )
    `, (err) => {

        if (err) {
            console.error(err.message);
            return;
        }

        console.log('Books table ready!');

        db.get('SELECT COUNT(*) AS count FROM books', (err, row) => {

            if (err) {
                console.error(err.message);
                return;
            }

            if (row.count === 0) {

                const books = [
                    ['The Alchemist', 'Paulo Coelho', 450],
                    ['Atomic Habits', 'James Clear', 550],
                    ['Rich Dad Poor Dad', 'Robert Kiyosaki', 399],
                    ['The Psychology of Money', 'Morgan Housel', 499],
                    ['Ikigai', 'Hector Garcia', 350],
                    ['Wings of Fire', 'A.P.J. Abdul Kalam', 300],
                    ['Think and Grow Rich', 'Napoleon Hill', 425],
                    ['The Power of Now', 'Eckhart Tolle', 475],
                    ['Deep Work', 'Cal Newport', 525],
                    ['Harry Potter', 'J.K. Rowling', 600]
                ];

                const stmt = db.prepare(
                    'INSERT INTO books (title, author, price) VALUES (?, ?, ?)'
                );

                books.forEach((book) => {
                    stmt.run(book);
                });

                stmt.finalize(() => {
                    console.log('10 books inserted successfully!');
                });
            }
        });
    });
});


// HOME ROUTE
app.get('/', (req, res) => {
    res.send('Book Management API is running!');
});


// GET ALL BOOKS WITH SEARCH, SORTING AND FILTERING
app.get(['/books', '/books/search'], (req, res) => {

    const {
        search_q = '',
        order_by = 'id',
        order = 'ASC',
        limit = '10',
        offset = '0',
        min_price,
        max_price
    } = req.query;

    const allowedColumns = ['id', 'title', 'author', 'price'];

    if (!allowedColumns.includes(order_by)) {
        return res.status(400).json({
            message: 'Invalid order_by parameter'
        });
    }

    const sortOrder = order.toUpperCase();

    if (!['ASC', 'DESC'].includes(sortOrder)) {
        return res.status(400).json({
            message: 'Order must be ASC or DESC'
        });
    }

    const limitValue = Number(limit);
    const offsetValue = Number(offset);

    if (
        !Number.isInteger(limitValue) ||
        !Number.isInteger(offsetValue) ||
        limitValue < 1 ||
        offsetValue < 0
    ) {
        return res.status(400).json({
            message: 'Invalid limit or offset'
        });
    }

    const conditions = [];
    const values = [];

    // Search by partial title
    if (search_q.trim()) {
        conditions.push('title LIKE ?');
        values.push(`%${search_q.trim()}%`);
    }

    // Minimum price filter
    if (min_price !== undefined) {
        if (min_price.trim() === '' || !Number.isFinite(Number(min_price))) {
            return res.status(400).json({
                message: 'Invalid minimum price'
            });
        }

        conditions.push('price >= ?');
        values.push(Number(min_price));
    }

    // Maximum price filter
    if (max_price !== undefined) {
        if (max_price.trim() === '' || !Number.isFinite(Number(max_price))) {
            return res.status(400).json({
                message: 'Invalid maximum price'
            });
        }

        conditions.push('price <= ?');
        values.push(Number(max_price));
    }

    if (
        min_price !== undefined &&
        max_price !== undefined &&
        Number(min_price) > Number(max_price)
    ) {
        return res.status(400).json({
            message: 'Minimum price cannot exceed maximum price'
        });
    }

    let sql = 'SELECT * FROM books';

    if (conditions.length > 0) {
        sql += ' WHERE ' + conditions.join(' AND ');
    }

    sql += ` ORDER BY ${order_by} ${sortOrder} LIMIT ? OFFSET ?`;

    values.push(limitValue, offsetValue);

    db.all(sql, values, (err, rows) => {

        if (err) {
            return res.status(500).json({
                message: 'Error retrieving books'
            });
        }

        res.status(200).json({
            count: rows.length,
            books: rows
        });
    });
});


// GET BOOK BY ID
app.get('/books/:id', (req, res) => {

    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({
            message: 'Invalid book ID'
        });
    }

    db.get(
        'SELECT * FROM books WHERE id = ?',
        [id],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    message: 'Database error'
                });
            }

            if (!row) {
                return res.status(404).json({
                    message: 'Book not found'
                });
            }

            res.status(200).json(row);
        }
    );
});


// POST - ADD NEW BOOK
app.post('/books', (req, res) => {

    const { title, author, price } = req.body || {};

    if (
        typeof title !== 'string' ||
        !title.trim() ||
        typeof author !== 'string' ||
        !author.trim() ||
        price === undefined ||
        price === null ||
        price === '' ||
        !Number.isFinite(Number(price))
    ) {
        return res.status(400).json({
            message: 'Title, author and a valid numeric price are required'
        });
    }

    db.run(
        'INSERT INTO books (title, author, price) VALUES (?, ?, ?)',
        [title.trim(), author.trim(), Number(price)],
        function (err) {

            if (err) {
                return res.status(500).json({
                    message: 'Error adding book'
                });
            }

            res.status(201).json({
                message: 'Book added successfully',
                id: this.lastID
            });
        }
    );
});


// PUT - UPDATE BOOK
app.put('/books/:id', (req, res) => {

    const id = Number(req.params.id);
    const { title, author, price } = req.body || {};

    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({
            message: 'Invalid book ID'
        });
    }

    if (
        typeof title !== 'string' ||
        !title.trim() ||
        typeof author !== 'string' ||
        !author.trim() ||
        price === undefined ||
        price === null ||
        price === '' ||
        !Number.isFinite(Number(price))
    ) {
        return res.status(400).json({
            message: 'Title, author and a valid numeric price are required'
        });
    }

    db.run(
        'UPDATE books SET title = ?, author = ?, price = ? WHERE id = ?',
        [title.trim(), author.trim(), Number(price), id],
        function (err) {

            if (err) {
                return res.status(500).json({
                    message: 'Error updating book'
                });
            }

            if (this.changes === 0) {
                return res.status(404).json({
                    message: 'Book not found'
                });
            }

            res.status(200).json({
                message: 'Book updated successfully'
            });
        }
    );
});


// DELETE BOOK
app.delete('/books/:id', (req, res) => {

    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({
            message: 'Invalid book ID'
        });
    }

    db.run(
        'DELETE FROM books WHERE id = ?',
        [id],
        function (err) {

            if (err) {
                return res.status(500).json({
                    message: 'Error deleting book'
                });
            }

            if (this.changes === 0) {
                return res.status(404).json({
                    message: 'Book not found'
                });
            }

            res.status(200).json({
                message: 'Book deleted successfully'
            });
        }
    );
});


// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});