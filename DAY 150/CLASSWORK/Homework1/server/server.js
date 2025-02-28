import express from 'express'
import dotenv from 'dotenv'
import { connect } from 'http2'
import cors from 'cors'
import connectDb from './db/connectDb.js'
import { User } from './models/userModels.js'


dotenv.config()
const app = express()

app.use(cors())

const PORT = process.env.PORT || 5001

app.get("/api/users", async (req,res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

app.listen(PORT, () => {
    connectDb()
    console.log(`Server is running on port ${PORT}`)
})