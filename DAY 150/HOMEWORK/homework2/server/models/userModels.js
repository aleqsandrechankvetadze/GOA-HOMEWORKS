import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    suranme:String,
    lunini:String,
    lunini1:String
})

export const User = mongoose.model("users", userSchema)