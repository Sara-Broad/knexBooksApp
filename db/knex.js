var env = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[env];
// const database = require('knex')(configuration)

module.exports = require('knex')(config);