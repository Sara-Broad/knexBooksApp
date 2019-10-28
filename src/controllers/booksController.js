require('dotenv').config()
const knex = require('../../db/knex.js')


// exports.selectAll = function(req, res) {
//   res.send('All books')
// }

// module.exports = {
  // getAllBooks: booksQueries.selectAll((err, books) => {
  //   if (err) {
  //     res.status(500).json({
  //       status: 'error',
  //       data: 'err'
  //     })
  //   } else {
  //     res.status(200).json({
  //       status: 'success',
  //       data: users
  //     })
  //   }
  // })

  // getAllBooks: function(req, res) {
  //   res.send("All books")
  // }

  // selectAll: function(req, res) {
  //   db.select('*').from('Books')
  //   .then(res => {
  //       console.log(res)
  //   })
  // }



// module.exports = {
//     getAllBooks(req, res) {
//         console.log
//         // return knex
//         // .select('*').from('Books')
//         // .then(function(books) {
//         //     console.log(books)
//         //     res.send(books)
//         // })
//     }
// }

module.exports = {
    // getAllBooks: (req, res, next) => {
    // db('Books').select()
    //   .then((books) => {
    //     res.send(books)
    //   })
    //   .catch((error) => {
    //     res.status(500).json(({ error }))
    //   })
    // }

    selectAllBooks: function(req, res) {
      return knex.select('*').from('Books')
        .then(books => {
            res.send(books)
        })
      }
}