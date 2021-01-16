require('dotenv').config()

module.exports = {
    server:{
        port:80,
        db:require('./db.config'),
        api:require('./api.config')
    }
}