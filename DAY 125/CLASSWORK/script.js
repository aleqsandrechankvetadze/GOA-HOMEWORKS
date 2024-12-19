const http = require("http")

const server = http.createServer((req, res) => {
    res.end("Goa Is The Best")
})

const PORT = 5

server.listen(PORT)