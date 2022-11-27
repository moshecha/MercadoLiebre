const express = require('express');
const router = express.Router()
const path=require('path')
const app=express()
const mainController = require('../controllers/mainController')

app.use(express.static(path.resolve(__dirname,'./public')))

router.get('/',mainController.index)


router.get('/login',mainController.login)

router.get('/register',mainController.register)
router.post('/register',mainController.create)

router.get('/vender',mainController.vender)

router.get('/producto/:id?',mainController.producto)


module.exports=router;