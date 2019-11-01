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


// from routes

// const booksRoutes = require('./api/books')

// router.use('/', booksRoutes)

// router.use('/', (req, res) => {
//     res.send('books');
//   });

// module.exports = router;

// const router = require("express").Router();
// const booksController = ('../controllers/booksController');

// router.get('/books', (req, res) => {
//   res.send('test')
// })

// pseudocode
// router.get('/books', booksController.allBooks)
// router.get('/books', async (req, res) => {
//     const response = await booksController.allBooks()
//     return res.status(response.status)
// })
// app.get('/books/:id', booksController.getBooksById)
// app.delete('/books/:id', booksController.removeBook)
// app.post('/books', booksController.addBook)
// app.put('/books/:id', booksController.changeRating)

// module.exports = router;

router.get('/books', function (req, res) {
    knex.select('*').from('Books')
    .then(function(books) {
        console.log(books)
        res.send(books)
    })
})


// from controller

// const allBooksController = {
//     allBooks: function(req, res) {
//         knex.select('*').from('Books')
//             .then(function(books){
//                 res.json(books)
//             })    
//         }
// }

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

// exports.getAllBooks = (req, res) => knex
// .select('*').from('Books')
// .then(function(books) {
//     console.log(books)
//     res.send(books)
// })

// getAllBooks()


// module.exports = {selectAll}


// const allBooksController = () => knex
// .select('*').from('Books')
// .then(function(books) {
//     console.log(books)
//     res.send(books)
// })


// const allBooksController = {

//     getAllBooks: (req, res)  => {
//        res.send('All books')
//     }
//     // books: {
//     //     allBooks: function() {
//     //         return knex('books')
//     //     }
//     // }
// }

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

// module.exports = function(app) {
//   app.get('/books', booksController.getAllBooks)
// }