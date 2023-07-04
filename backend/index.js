const express=require('express')
const app=express()
const {connection}=require("./db")
require("dotenv").config()
const cors=require('cors')
app.use(cors())

app.use(express.json())
const {userRouter}=require("./routes/user.route")


const { auth } = require('./middleware/auth.middleware')
const { dogRouter } = require('./routes/dog.route')

const { dogloRouter } = require('./routes/doglos.route')


app.use("/users",userRouter)
app.use("/dog",dogRouter)
app.use("/dogloos",dogloRouter)







app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log(`running at port ${process.env.port} `)
    }catch(err){
        console.log(err)
        console.log("something went wrong")
    }

})