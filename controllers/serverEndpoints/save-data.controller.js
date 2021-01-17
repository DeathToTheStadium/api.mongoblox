const save_data  = require('../../models/servermodels/save-data.model')
const config     = require('../../config/db.config')
const ConnDB     = require('../../models/index.models')

// :database/:collection
module.exports = function save(req,res,next){
    for (var x in ConnDB){
        if (req.params.database == ConnDB[x].name) {
            console.log(ConnDB[x].conn)
            res.sendStatus(200)
        } 
    }
}