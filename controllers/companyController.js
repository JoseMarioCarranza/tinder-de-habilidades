const ModelCompanies = require('../models/Companies')

const createCompany = (req, res) => {
    ModelCompanies.create(req.body)
        .then(row => {
            res.status(201).send({
                message: 'Company created successfully',
                data: row
            })
                .catch(err => {
                    res.status(400).send({ message: 'Error creating company', err })
                })
        })
}

const findAllCompanies = (req, res) => {
    ModelCompanies.findAll()
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error findig companies', err })
        })
}

const findOneCompany = (req, res) => {
    ModelCompanies.findOne(req.params.idCompany)
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error finding company', err })
        })
}

const updateCompany = (req, res) => {
    ModelCompanies.update(req.params.idCompany, req.body)
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error updating company', err })
        })
}

const destroyOneCompany = (req, res) => {
    ModelCompanies.destroy(req.params.idCompany)
        .then(rows => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error deleting company', err })
        })
}

const softDeleteOneCompany = (req, res) => {
    ModelCompanies.softDelete(req.params.idCompany)
        .then(rows => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(400).send({ message: 'Error soft deleting company', err })
        })
}

module.exports = {
    createCompany,
    findAllCompanies,
    findOneCompany,
    updateCompany,
    destroyOneCompany,
    softDeleteOneCompany
}