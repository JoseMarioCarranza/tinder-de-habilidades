const createUser = (req, res) => {
    res.status(200).send({
        message: 'User created'
    })
}

module.exports = {
    createUser
}