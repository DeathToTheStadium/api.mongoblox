var router,save_data
router    = require('express').Router()

save_data = require('../../controllers/serverEndpoints/save-data.controller')
router.post('/:database/:collection/save-data',save_data)


module.exports = router
