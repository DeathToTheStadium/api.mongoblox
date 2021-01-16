//written By Joseph

var express,app,bodyparser,env
env     = require('dotenv').config()
bodyparser = require('body-parser')
express = require('express')
app     = express()

//Setting Parsers
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


var router,fetch,save,del,update
router = require('./routes/index.router')
save   = router.save
fetch  = router.fetch
del    = router.delete
update = router.update

//Setting routes
app.use(save)
app.use(fetch)
app.use(update)
app.use(del)

app.listen(process.env.DATASTOREPORT,console.log(`SERVER RUNNING ON PORT: ${process.env.DATASTOREPORT}`))