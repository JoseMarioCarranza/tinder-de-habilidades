const express = require('express')
const router = express.Router()
const jobController = require('../controllers/jobController')

router.post('/jobs', jobController.createJob)
router.get('/jobs', jobController.findAllJobs)
router.get('/jobs/:idJob', jobController.findOneJob)
router.patch('/jobs/:idJob', jobController.updateJob)
router.delete('/jobs/:idJob', jobController.softDeleteOneJob)
router.delete('/jobs/destroy/:idJob', jobController.destroyOneJob)

module.exports = router