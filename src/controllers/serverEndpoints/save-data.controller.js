const save_data  = require('../../models/servermodels/save-data.model')
const config     = require('../../config/db.config')
const ConnDB     = require('../../models/index.models')
const utilities  = require('../../utilities/dataclass.utilities')
// :database/:collection
// console.log(ConnDB)
module.exports = function save(req,res,next){
    if (ConnDB[req.params.database]){
       res.sendStatus(200)
    } else {
        console.log(truth)
        res.sendStatus(403)
    }
}