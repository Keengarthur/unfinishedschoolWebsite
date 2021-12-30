
const bodyParser = require('body-parser')

const express = require('express')
const app = express()
const connectDb = require('./database/connect')
const individual = require('./routes/individual')
require('dotenv').config()
const router = require('./routes/router')



app.use(express.json())
app.use(express.urlencoded({extended:false}))

const port = 3005

app.use(bodyParser.json())


app.use('/student/profile',router)

app.use('/student/profile/one',individual)
app.use(express.static('./images'))

start = async() => {
    try{
        const log = await connectDb(process.env.MONGO_URI)
        app.listen(port,console.log('listening...'))

    }
    catch(err){
        console.log(err)
    }
}
start()

// app.listen(port,console.log('server listening...'))

