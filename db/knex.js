// var env = process.env.NODE_ENV || 'development';
// var config = require('../knexfile')[env];
// // const database = require('knex')(config)

// module.exports = require('knex')(config);

const knex = require('knex');
const knexfile = require('../knexfile')
const env = process.env.NODE_ENV || 'development';
const configOptions = knexfile[env];

module.exports = knex(configOptions);