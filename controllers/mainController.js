
const path = require('path')

const mainController = {

    index : (req,res)=>{

        let productos = [
            {
                id:1,
                descripcion: 'Cafetera Moulinex' ,
                precio: '$6.770',
                descuento:'40% OFF',
                imagen:'images/img-cafetera-moulinex.jpg'
            },
            {
                id:2,
                descripcion: 'MacBook Pro 2019' ,
                precio: '$230.000',
                descuento:'20% off',
                imagen:'/images/img-macbook-pro-2019.jpg'
            },
            {
                id:3,
                descripcion: 'Samsung Galaxy S10' ,
                precio: '$70.500',
                descuento:'10% off',
                imagen:'/images/img-samsung-galaxy-s10.jpg'
            },
            {
                id:4,
                descripcion: 'SmartTv Samsung 43' ,
                precio: '$23.200',
                descuento:'5% off',
                imagen:'/images/img-tv-samsung-smart.jpg'
            },
        ]

        res.render('home', {productos : productos})

    },
    login : (req,res)=>{
        res.render('login')
    },
    register : (req,res)=>{
        res.render('register')
    },
    vender : (req,res)=>{
        res.render('vender')
    }
}

module.exports = mainController