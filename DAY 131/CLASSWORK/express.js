const express = require("express")
const path = require("path")
const app = express()
const PORT = 3000

app.use(express.static("./public"))

app.get("/",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,"./public/index.html"))
})

app.get("/book",(req,res)=>{
    res.status(200).send("Hello book")
})

app.all("*",(req,res)=>{
    res.status(404).sendFile(path.resolve(__dirname,"./public/notfound.html"))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})