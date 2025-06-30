if(process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}

const express = require("express")
const bcrypt = require("bcrypt")
const app = express()
const initializePassport = require("./passport-config")
const passport = require("passport")
const flash = require("express-flash")
const session = require("express-session")


initializePassport(passport , name =>{
    return users.find(user => user.name === name)
})

const users = []

app.set("view-engine" , "ejs")
app.use(express.urlencoded({extended:false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())


app.get("/" , (req , res) => {
    res.render("index.ejs" , {name: "test"})
})

app.get("/register" , (req , res) => {
    res.render("register.ejs" , {name: "test"})
})
app.post("/register" , async (req , res) =>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password , 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            password: hashedPassword
        })
        res.redirect("/login")
    } catch{
        res.redirect("/register")
    }
    console.log(users)
})

app.get("/login" , (req , res) => {
    res.render("login.ejs" , {name: "test"})
})
app.post("/login" , passport.authenticate("local" , {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}))




app.listen(6969)