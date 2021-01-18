require('dotenv').config()
module.exports = {
  mongoblox_api:{
    TOKEN_SECRET:process.env.TOKEN_SECRET,
    REFRESH_TOKEN:process.env.REFRESH_SECRET
  }
}