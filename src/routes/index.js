const express = require('express')
const db = require('../../db/knex')
const router = express.Router()

router.get('/books', (req, res) => {
    console.log(req.body)
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
    console.log('bookId', req.params.id)
    db.queryById(req.params.id).then(books => {
        console.log(books)
        res.send(books)
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
})

module.exports = router;