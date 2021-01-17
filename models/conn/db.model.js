const mongoose = require('mongoose')
class CreateConn{
    constructor(uri,options={useNewUrlParser:true,useUnifiedTopology:true},databasename){
        if(!uri){return console.error('uri must be specified')}
        if(!databasename){return console.error('pls specify the connection name')}
        this.conn = mongoose.createConnection(uri,options)
        this.name = databasename
        if (!this.conn) {
            //Create  Connection ? or maybe return a error?
            console.log('there isnt a Connection ?')
        }
    
        if (config.env === 'development') {
            mongoose.set('debug', true);
        }
    
        this.conn.on('disconnected', () => {
            console.log('disconnected')
        });
    
        this.conn.on('error', (err) => {
            console.log('there was an Error : ' + err)
        });
    
        this.conn.on('open', () => {
            console.log('Connections')
        });
    
        this.conn.once('open', () => {
            console.log('connected')
        });
        return {conn:this.conn,name:this.databasename}
    }
}