require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser')
const PORT = 8000
const knex = require('./db/knex.js')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('database connection')
})

// I will be moving this to routes and controllers

// app.get('/books', function (req, res) {
//     knex.select('*').from('Books')
//     .then(function(books) {
//         console.log(books)
//         res.send(books)
//     })
// })

// app.get('/books/:id', function (req, res) {
//     console.log('req', req.params)
//     knex('Books').where('id', req.params.id)
//     .then(function(book) {
//         // console.log(res.statusCode)
//         console.log(book)
//         res.send(book)
//     })
// })

app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}`)
})