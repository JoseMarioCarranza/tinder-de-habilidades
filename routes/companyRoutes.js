const express = require('express')
const router = express.Router()
const companyController = require('../controllers/companyController')

router.post('/companies', companyController.createCompany)
router.get('/companies', companyController.findAllCompanies)
router.get('/companies/:idCompany', companyController.findOneCompany)
router.patch('/companies/:idCompany', companyController.updateCompany)
router.delete('/companies/:idCompany', companyController.softDeleteOneCompany)
router.delete('/companies/destroy/:idCompany', companyController.destroyOneCompany)

module.exports = router