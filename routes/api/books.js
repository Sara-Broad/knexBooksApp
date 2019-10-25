var router = require("express").Router();
const booksController = ('../../controllers/booksController');

// pseudocode
router.get('/books', booksController.allBooks)
// router.get('/books', async (req, res) => {
//     const response = await booksController.allBooks()
//     return res.status(response.status)
// })
// app.get('/books/:id', booksController.getBooksById)
// app.delete('/books/:id', booksController.removeBook)
// app.post('/books', booksController.addBook)
// app.put('/books/:id', booksController.changeRating)

module.exports = router;
