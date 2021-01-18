const save_data  = require('../../models/servermodels/save-data.model')
const ConnDB     = require('../../models/index.models')
// :database/:collection
// console.log(ConnDB)
module.exports = function save(req,res,next){
    if (ConnDB[req.params.database]){
        let saver = new save_data(ConnDB[req.params.database],req.params.collection)
        saver.save({
            playerKey:'Dude',
            data:req.body
        })
       res.sendStatus(200)
    } else {
        console.log(truth)
        res.sendStatus(403)
    }
}