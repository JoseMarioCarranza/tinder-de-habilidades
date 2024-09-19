const knex = require('../config')

const create = (body) => {
    return knex
        .insert(body)
        .into('users')
        .returning('*')
}

module.exports = {
    create
}