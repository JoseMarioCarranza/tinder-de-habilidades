const knex = require('../config')

const create = (body) => {
    return knex
        .insert(body)
        .into('jobs')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('jobs')
}

const findOne = (jobId) => {
    return knex
        .select('*')
        .from('jobs')
        .where('job_id', jobId)
}

const update = (jobId, body) => {
    return knex
        .update(body)
        .from('jobs')
        .where('job_id', jobId)
        .returning('*')
}

const destroy = (jobId) => {
    return knex
        .del()
        .from('jobs')
        .where('job_id', jobId)
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy
}