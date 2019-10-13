require('dotenv').config()

// const pg = require('knex')({ client: 'pg'})
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 5433

app.use(bodyParser.json())

// const knex = require('knex')({
//     client: 'pg',
//     version: '7.2',
//     connection: {
//         host: process.env.POSTGRES_HOST,
//         user: process.env.POSTGRES_USER,
//         password: process.env.POSTGRES_PASSWORD,
//         database: process.env.POSTGRES_DB  
//     }
// })

app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}`)
})