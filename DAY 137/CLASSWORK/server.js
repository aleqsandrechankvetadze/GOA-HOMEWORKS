import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDb.js"
import { connect } from "mongoose"


dotenv.config()

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.listen(process.env.PORT,err =>{
    connectDB()
    console.log(`Server is running on port ${process.env.PORT}`)
})