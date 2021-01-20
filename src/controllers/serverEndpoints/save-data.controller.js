const save_data  = require('../../models/servermodels/save-data.model')
const ConnDB     = require('../../models/index.models')
const { playerKey } = require('../../db/datastore.db')
// :database/:collection
// console.log(ConnDB)
module.exports = async function save(req,res,next){
    let database = ConnDB[req.params.database]
    if (database) {
        console.log('database exist')
      if (database.conn.models[req.params.collection]){
        let DuplicateCheck = await database.conn.models[req.params.collection].findOne({playerKey:req.body.playerKey})
        if ( DuplicateCheck ){
          await database.conn.models[req.params.collection].findOneAndUpdate({playerKey:req.body.playerKey},{data:req.body.data},
            (err,p)=>{
              if (err) {console.log(err)}
              res.status(200).send("Data Updated")
            })
        } else {
          let model = await new database.conn.models[req.params.collection]({
            playerKey:req.body.playerKey,
            data:req.body.data,
          })
          model.save((err,data)=>{
            res.status(200).send("DataSaved")
          })

        }
      } else {
          console.log("collection is null")
      }
    } else {
        console.log('database Null')
    }
}

// let conn = ConnDB[req.params.database]
// if (conn){
//     var data = false; 
//     conn.conn.model(req.params.collection).findOne({playerKey:req.body.playerKey},(err,p)=>{
//         // if (err) return err;
//         if (p) {data = true} else {data = false}
//         console.log(data)
//     })
//     console.log(data)
//     if (data == true) {
//         res.send("DuplicateData please use the update method")
//     } else {
//         let saver = new save_data(ConnDB[req.params.database],req.params.collection)
//         saver.save({
//             playerKey:req.body.playerKey,
//             data:req.body
//         })
//     }
// } else {
//     // console.log(truth)
//     res.sendStatus(403)
// }