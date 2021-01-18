module.exports = {
    server:{
        port:80,
        db:require('./db.config'),
        api:require('./api.config')
    }
}
var bcrypt = require('bcrypt');
var password = require('crypto').randomBytes(124).toString('hex');
bcrypt.genSalt(20, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        console.log(hash)
        console.log(hash)
    });
});