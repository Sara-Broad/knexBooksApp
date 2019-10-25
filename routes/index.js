var router = require("express").Router();
const booksRoutes = require('./api/books')

router.use('/', booksRoutes)

router.use('/', (req, res) => {
    res.send('books');
  });

module.exports = router;