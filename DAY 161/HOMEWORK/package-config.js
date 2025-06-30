const localStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")

function initialize (passport , getUserByName){
    const authenticateUser = async (name , password , done) =>{
        const user = getUserByName(name)
        if (user == null){
            return done(null, false, {message: "no user with the name found"})
        }

        try {
            if(await bcrypt.compare(password , user.password)){
                return done(null , user)
            }else{
                return done(null , false , {message: "incorrect password"})
            }
        } catch (e){
            return done(e)
        }
    }
    passport.use(new localStrategy({ usernameField: "name"} , authenticateUser))
    passport.serializeUser((user , done) => {})
    passport.deserializeUser((id , done) => {})
}
module.exports = initialize