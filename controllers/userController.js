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

module.exports = {
    createUser
}