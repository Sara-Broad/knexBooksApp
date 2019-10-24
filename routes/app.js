const express = require('express')
const knex = require('./db/knex.js')
// import controllers
const booksController = ('../controllers/books')

// pseudocode
app.get('/books', booksController.getAllBooks)
app.get('/books/:id', booksController.getBooksById)
app.delete('/books/:id', booksController.removeBook)
app.post('/books', booksController.addBook)
app.put('/books/:id', booksController.changeRating)

module.exports = app;