const mongoose = require('mongoose')
const dbConfig = require('../config/db.config')
const configs = require('../config/db.config')
const CreateConn = require('./conn/db.model')




function CompileConnections(DbConfig){
    let conn = {}

    function Logic(dbData){
        var x,schemas,schemaobj;
        // console.log(dbData)
        conn[dbData.dbName] = new CreateConn(dbData.uri,dbData.dbName)
        schemas = dbData.schemas
        for (x in schemas){
            schemaobj = new mongoose.Schema(schemas[x],{collection:x})
            conn[dbData.dbName].conn.model(x,schemaobj)
        }
        // console.log(conn)
        // console.log(conn[dbData.dbName].conn.model)
    }
    
    function recurse(t){
        var x,val;
        val = t
        for (x in val) {
            if (x === "databases"){
                recurse(val[x])
            } else if (x !== "databases" && typeof(val[x]) === 'object') {
                Logic(val[x])
            }
        }
    }

    recurse(dbConfig)
    return conn
}
var Connections = CompileConnections(configs)
module.exports = Connections
