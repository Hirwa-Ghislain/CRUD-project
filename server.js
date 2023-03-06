const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')
const bodyparser=require('body-parser')
const path=require('path')
const axios=require('axios')
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const connectDB=require('./server/database/connection')

const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'))

//mongodb connection
connectDB()

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")


//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


app.use('/',require('./server/routes/router'))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT,()=>{
    console.log("server is running at 3000 port");
}) 