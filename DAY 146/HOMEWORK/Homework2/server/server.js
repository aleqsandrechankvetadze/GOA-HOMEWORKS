import express from "express"
import cors from "cors"

const app = express()
app.use(cors())


const USER = {
    music1:"asds",
    music2:"adssad",
    music3:"asdasd"
}

app.get("/api/user", (req,res) => {
    try {
        res.status(200).json(USER)
    } catch (error) {
        res.status(500).json({error:error})
    }
})


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})