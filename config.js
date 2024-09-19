/*If it is not specified in the env file how to work 
by default it will enter developer mode*/

const env = process.env.NODE_ENV || 'development'

const knexfile = require('./knexfile')
const knex = require('knex')

module.exports = knex(knexfile[env])