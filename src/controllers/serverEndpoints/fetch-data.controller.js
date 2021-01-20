const fetch_data  = require('../../models/servermodels/fetch-data.model')
const ConnDB     = require('../../models/index.models')
const dbConfig = require('../../config/db.config')
// :database/:collection
// console.log(ConnDB)
module.exports = async function save(req,res,next){
    let DB = ConnDB[req.params.database]
    if (DB) {
       if (DB.conn.models[req.params.collection]){
           console.log("Collection Exists")
           var data = await DB.conn.models[req.params.collection].findOne({playerKey:req.body.playerKey})
           if (data) {
               res.json(data)
           }
       } else {
            console.log("Collection Invalid")
            res.status(400).send("collection not found")
       }
    } else {
        console.log("database null")
        res.status(400).send("Database Not Found")
    }
}