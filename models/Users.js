const knex = require('../config')

const create = (body) => {
    return knex
        .insert(body)
        .into('users')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('users')
        .where('active', true) //We only implement the search in fields where logical deletion has not been implemented.
}

const findOne = (userId) => {
    return knex
        .select('*')
        .from('users')
        .where('user_id', userId)
        .where('active', true) //We only implement the search in fields where logical deletion has not been implemented.
}

const update = (userId, body) => {
    return knex
        .update(body)
        .from('users')
        .where('user_id', userId)
        .returning('*')
}

module.exports = {
    create,
    findAll,
    findOne,
    update
}