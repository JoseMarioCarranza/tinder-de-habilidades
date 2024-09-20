const knex = require('../config')

const create = (body) => {
    return knex
        .insert(body)
        .into('companies')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('companies')
        .where('active', true) //We only implement the search in fields where logical deletion has not been implemented.
}

const findOne = (companyid) => {
    return knex
        .select('*')
        .from('companies')
        .where('company_id', companyid)
        .where('active', true) //We only implement the search in fields where logical deletion has not been implemented.
}

const update = (companyid, body) => {
    return knex
        .update(body)
        .from('companies')
        .where('company_id', companyid)
        .returning('*')
}

const destroy = (companyid) => {
    return knex
        .del()
        .from('companies')
        .where('company_id', companyid)
}

const softDelete = (companyid) => {
    return knex
        .update({ 'active': false })
        .from('companies')
        .where('company_id', companyid)
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete
}