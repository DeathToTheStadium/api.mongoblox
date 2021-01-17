const configs = require('../config/db.config')
const CreateConn = require('./conn/db.model')
module.exports = {
    conn1: new CreateConn(configs.databases.lavagame.uri,configs.databases.lavagame.dbName),
    conn2: new CreateConn(configs.databases.angryclause.uri,configs.databases.angryclause.dbName)
}

