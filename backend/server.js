const express=require('express')
const bodyParser=require('body-parser')
const mysql=require('mysql')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const session=require('express-session')
const app=express()
require('dotenv').config()
const port = process.env.PORT || 5000
const db=require('./config/Database')
const catRoute=require('./routers/routeCategorie')
const postRoute=require('./routers/routePost')
const usRoute=require('./routers/routeUser')
const contRoute=require('./routers/routeContact')
const aboutRoute=require('./routers/routeAbout')
const matRoute=require('./routers/routeMateriel')
app.use(express.static("public"));
const corsOption={
    //1. specify the exact origin
    //origin : http://localhost:8080
    origin:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-type', 'Authorization'],
    credentials:true,
}
app.use(cookieParser());
app.use(session({
    secret: 'Keybord cat',
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 60 * 60 * 24
    }
}))

app.use(cors(corsOption))
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())
app.use('/categorie', catRoute)
app.use('/poste', postRoute)
app.use('/auth', usRoute)
app.use('/contact', contRoute )
app.use('/about', aboutRoute )
app.use('/materiel', matRoute )




app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})
app.listen(port,()=>{
    console.log(`Server is up and running on port :http://localhost:${port}`)
})
