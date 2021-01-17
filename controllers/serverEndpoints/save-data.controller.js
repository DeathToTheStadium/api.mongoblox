const save_data  = require('../../models/servermodels/save-data.model')
const config     = require('../../config/db.config')
module.exports = function save(req,res,next){
   let storage  = new save_data(config.databases[req.parmas.database],req.params.collection)
   let val = storage.save(req.body,res)
   if(val === true){
       res.sendStatus(401)
   }
   res.send(storage)
}