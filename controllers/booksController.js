require('dotenv').config()
const knex = require('../db/knex')
// const { Books } = Model

const allBooksController = {
    allBooks: function(req, res) {
        knex.select('*').from('Books')
            .then(function(books){
                res.json(books)
            })    
        }
}

module.exports = allBooksController

// module.exports = {
//     allBooks: function(req, res){
//       knex.select('*').from('Books')
    //     .then(function(books){
    //         res.json(books)
    //     })
// }

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


// const allBooksController = {
    // getAllBooks (req, res) {
    //     Books.select
    // },
    // getAllBooks: function(req, res){
    //     res.send('All books')
    // },
    // getAllBooks: function(req, res) {
    //     knex.select('*').from('Books')
    //     .then(function(books){
    //         res.json(books)
    //     })
    // }

    // getBooksById (req, res) {

    // },

    // removeBook (req, res) {

    // },

    // addBook (req, res) {

    // },

    // changeRating (req, res) {
        
    // }
// }

// module.exports = allBooksController;


