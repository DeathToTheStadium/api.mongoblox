var router,fetch_data
router    = require('express').Router()

fetch_data = require('../../controllers/serverEndpoints/fetch-data.controller')
router.post('/:database/:collection/fetch-data',fetch_data)


module.exports = router