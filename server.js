require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser')
const PORT = 8000
const knex = require('./db/knex.js')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/Books', function(res, req) {
//     knex.raw('select * from Books')
//     .then(function(books) {
//         res.send(books)
//     })
// })

// app.get("/Books", async (req, res) => {
//     const books = await knex("Books");
//     res.json({ Books })
// })

app.get('/', function (req, res) {
    res.send('database connection')
})

app.get('/Books', function (req, res) {
    res.send('Books database connection')
})

app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}`)
})