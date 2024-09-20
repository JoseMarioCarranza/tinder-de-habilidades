const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/users', userController.createUser)
router.get('/users', userController.findAllUsers)
router.get('/users/:idUser', userController.findOneUser)

module.exports = router