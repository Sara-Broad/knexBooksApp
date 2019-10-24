const knex = require('./db/knex.js')
const { Books } = Model

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


const allBooksController = {
    getAllBooks (req, res) {
        Books.select
    },

    getBooksById (req, res) {

    },

    removeBook (req, res) {

    },

    addBook (req, res) {

    }
}

module.exports = allBooksController;