var express,router,middle
express = require('express')
router    = express.Router()

middle = require('../../controllers/serverEndpoints/save-data.controller')

router.post('/:database/:collection/save-data',middle)


module.exports = router