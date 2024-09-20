const ModelUsers = require('../models/Users')

const createUser = (req, res) => {
    ModelUsers.create(req.body)
        .then(row => {
            res.status(201).send({
                message: 'User created successfully',
                data: row
            })
                .catch(err => {
                    res.status(400).send({ message: 'Error creating user', err })
                })
        })
}

const findAllUsers = (req, res) => {
    ModelUsers.findAll()
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error findig users', err })
        })
}

const findOneUser = (req, res) => {
    ModelUsers.findOne(req.params.idUser)
        .then(rows => {
            res.status(200).send(rows)
        })
        .catch(err => {
            res.status(400).send({ message: 'Error finding user', err })
        })
}

module.exports = {
    createUser,
    findAllUsers,
    findOneUser
}