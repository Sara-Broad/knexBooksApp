require('dotenv').config()

// const pg = require('knex')({ client: 'pg'})
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 5433

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}`)
})