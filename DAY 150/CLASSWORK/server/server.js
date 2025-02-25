import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./db/connectDb.js"
import { User } from "./models/userModels.js"


const PORT = process.env.PORT || 5002

dotenv.config()
const app = express()

app.use(express.json())

app.use(cors())


app.get("/api/users", async (req,res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post("/api/users", async (req,res) => {
    try {
        const body = req.body
        const user = User.create(body)
        res.status(201).json(body)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.listen(PORT, () => {
    connectDb()
    console.log(`Server is running on port ${process.env.PORT}`)
})