import express from "express"
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

app.use(express.urlencoded({extended:false}))
app.set("view-engine","ejs")

app.get("/",(req,res)=> {
    res.render("index.ejs",{name:"goa"})
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is starting on ${PORT}`)
})