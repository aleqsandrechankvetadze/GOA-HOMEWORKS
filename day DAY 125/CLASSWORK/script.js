const http = require("http")

const server = http.createServer((req, res) => {
    res.end("Goa Is The Best")
})

const PORT = 5000

server.listen(PORT, ()=>{
    console.log(`nodemon app${PORT}`)
})