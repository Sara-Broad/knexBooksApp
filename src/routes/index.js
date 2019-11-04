const express = require('express')
const db = require('../../db/knexQueries')
const router = express.Router()

router.get('/books', (req, res) => {
  db.getAllBooks().then(books => {
      console.log('BOOKSSSS', books)
      res.send(books)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/books/sort', (req, res) => {
  db.ascendingRatingSort().then(books => {
      res.send(books)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/books/:id', (req, res) => {
  let bookId = req.params.id
  db.queryById(bookId).then(books => {
      res.send(books)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/books', (req, res) => {
  db.addBook(req.body).then(books => {
      res.json(books)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/books/:id', (req, res) => {
  let bookId = req.params.id
  db.deleteBook(bookId).then(books => {
      res.json(books)
    })
    .catch(err => {
      res.status(500).sendStatus('DATABASE ERROR: ' + err.message)
    })
})

router.put('/books/:id', (req, res) => {
  let id = req.params.id
  db.changeRating(req.body, id).then(books => {
    console.log('The rating has been changed')
    res.json(books)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router;