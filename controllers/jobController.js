const ModelJobs = require('../models/Jobs')

const createJob = (req, res) => {
    ModelJobs.create(req.body)
        .then(row => {
            res.status(201).send({
                message: 'Job created successfully',
                data: row
            })
                .catch(err => {
                    res.status(400).send({ message: 'Error creating Job', err })
                })
        })
}

const findAllJobs = (req, res) => {
    ModelJobs.findAll()
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error findig Jobs', err })
        })
}

const findOneJob = (req, res) => {
    ModelJobs.findOne(req.params.idJob)
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error finding Job', err })
        })
}

const updateJob = (req, res) => {
    ModelJobs.update(req.params.idJob, req.body)
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error updating Job', err })
        })
}

const destroyOneJob = (req, res) => {
    ModelJobs.destroy(req.params.idJob)
        .then(rows => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error deleting Job', err })
        })
}

const softDeleteOneJob = (req, res) => {
    ModelJobs.softDelete(req.params.idJob)
        .then(rows => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error soft deleting Job', err })
        })
}

module.exports = {
    createJob,
    findAllJobs,
    findOneJob,
    updateJob,
    destroyOneJob,
    softDeleteOneJob
}