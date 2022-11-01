const express = require('express')
const app=express()
const path=require('path')

app.use(express.static(path.resolve(__dirname,'./public')))
let PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log('puerto http://localhost:'+PORT))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})


app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/vender',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/vender.html'))
})