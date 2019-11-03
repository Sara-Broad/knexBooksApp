// const knex = require('knex');
// const knexfile = require('../knexfile')
// const env = process.env.NODE_ENV || 'development';
// const configOptions = knexfile[env];

// module.exports = knex(configOptions);

const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function Books(db = connection) {
    return db('Books')
}

function getAllBooks (db = connection) {
  return db('Books').select()
}

function queryById (bookId, db = connection) {
    return db('Books').where('id', bookId)
}

function ascendingRatingSort(db = connection) {
    return db('Books').orderBy('rating', 'asc')
}

function addBook(newBook, db = connection) {
    return db('Books').insert(newBook)
}

function deleteBook(bookId, db = connection) {
    return db('Books').where('id', bookId).del()
}

function changeRating(rating, id, db = connection) {
    return db('Books').where('id', '=', id).update(rating)
}


module.exports = {
    getAllBooks: getAllBooks,
    queryById: queryById,
    ascendingRatingSort: ascendingRatingSort,
    addBook: addBook,
    deleteBook: deleteBook,
    changeRating: changeRating
}