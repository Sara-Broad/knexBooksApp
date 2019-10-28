// require('dotenv').config()
var router = require("express").Router();
const booksController = ('../controllers/booksController');


router.get('/books', booksController.selectAllBooks)

// module.exports = function(app) {
//   app.get('/books', booksController.getAllBooks)
// }

// router.get('/books', function (req, res) {
//     knex.select('*').from('Books')
//     .then(function(books) {
//         console.log(books)
//         res.send(books)
//     })
// })

module.exports = router;