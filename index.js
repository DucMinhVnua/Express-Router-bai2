// Express
const express = require('express');
const app = express();
const port = 3000;

// POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// lowdb
require('./db');

// routes
const usersRoutes = require('./routes/users.routes');
const booksRoutes = require('./routes/books.routes');

// pug
app.set('view engine', 'pug')
app.set('views', './views')

// get database


// ---------- get

// --------------------- books
app.use('/books', booksRoutes);

// --------------------- users
app.use('/users', usersRoutes);


// ------------ post


// localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
