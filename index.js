//express import
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

//express initialize
const app = express()

//ejs config
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'src','app','views'))

app.use(express.static(path.join(__dirname,'src','public')))

//route
app.get("/", (req, res)=>{
    res.render('homepage.ejs')
})

app.listen(3000)