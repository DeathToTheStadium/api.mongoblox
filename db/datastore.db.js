//Create Schema Model
const mongoose = requre('mongoose')


module.exports = new mongoose.Schema({
    playerKey:{
        Type:String,
        maxlength:15
    },
    data:Object,
    metaData:Object
})