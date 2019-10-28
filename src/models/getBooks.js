'use strict'

const knex = require('../../db/knex')

module.exports = {
    selectAllBooks() {
        return knex('books')
    }
}