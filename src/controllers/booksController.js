'use strict'
const knex = require('../../db/knex.js')

// function Books() {
//   return knex('Books')
// }

// function getAllBooks() {
//   return Books().select('*')
// }

// function getAllBooks(req, res) {
//   knex('Books')
//   .select('*')
//   .then(function (books) {
//     console.log(books)
//     res.send(books)
//   })
//   .catch(function (err) {
//     res.status(500).send('DATABASE ERROR: ' + err.message)
//   })
// }

// module.exports = {
//   getAllBooks(){
//     return knex('Books')
//   }
// }

// module.exports = {
//   getAllBooks: getAllBooks
// }



// module.exports = {
//     // getAllBooks: (req, res, next) => {
//     // db('Books').select()
//     //   .then((books) => {
//     //     res.send(books)
//     //   })
//     //   .catch((error) => {
//     //     res.status(500).json(({ error }))
//     //   })
//     // }

//     selectAllBooks: function(req, res, next) {
//       knex.select('*').from('Books')
//         .then(books => {
//             return res.send(books)
//         })
//         .catch((error) => {
//               res.status(500).json(({ error }))
//             })
//       }
// }