const http = require("http")
const { readFileSync } = require("fs")

const html = readFileSync("./page/homepage.html")
const about = readFileSync("./page/about.html")
const notFound = readFileSync("./page/notfounc.html")

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200,{"Content-Type": "text/html" })
        res.write(html)
        res.end()
    } else if(req.url === "/about.html"){
        res.writeHead(200,{"Content-Type" : "text/html"})
        res.write(about)
        res.end()
    }else if(req.url === "/notfounc.html"){
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write(notFound)
        res.end()
    }
})
const PORT = 50
server.listen(PORT,()=>{
    console.log(`app has connected to port ${PORT}`)
})