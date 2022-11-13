const express = require('express')
const app=express()
const path=require('path')

const rutasMain = require('./routes/main');
app.use('/', rutasMain)

app.use(express.static(path.resolve(__dirname,'./public')))
let PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log('puerto http://localhost:'+PORT))

app.set("view engine", "ejs")


