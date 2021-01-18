const mongoose = require('mongoose')
const datastoreSchema = require('../db/datastore.db')
var opt = {useNewUrlParser:true,useUnifiedTopology:true}
module.exports = {
    databases:{
        //Creates a connection to the DATABASE
        lavagame:{
            uri:`mongodb+srv://DeathToTheStadium:YGGYTv4FdTaumvg3@cluster0.uhrrw.mongodb.net/lavagame?retryWrites=true&w=majority`,
            dbName:'lavagame' ,
            collectionNames:['playerdata','receipts'],
            schemas:{
                playerData:{
                    playerKey:String,
                    data:Object,
                },
                receipts:{
                    playerKey:String,
                    timestamp:Number,
                    productspurchased:Object,
                    totalRobuxSpent:Number
                }
            }
        },
        angryclause:{
            uri:`mongodb+srv://DeathToTheStadium:YGGYTv4FdTaumvg3@cluster0.uhrrw.mongodb.net/angryclause?retryWrites=true&w=majority`,
            dbName:'angryclause',
            collectionNames:['playerdata','receipts'],
            schemas:{
                playerData:{
                    playerKey:String,
                    data:Object,
                },
                receipts:{
                    playerKey:String,
                    timestamp:Number,
                    productspurchased:Object,
                    totalRobuxSpent:Number
                }
            }
        }
    }
}