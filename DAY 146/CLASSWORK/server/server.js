import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

const USER = {
    id:1,
    name:"leqsooo",
    email:"leqso1502@gmail.com"
}

app.get("/api/user",(req,res)=>{
    try {
        res.status(200).json(USER)
    } catch (error) {
        res.status(500).json(error)
    }
})

const PORT = 7050

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})