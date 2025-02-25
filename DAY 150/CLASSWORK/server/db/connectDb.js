import mongoose, { mongo } from "mongoose"

export default async function connectDb(){
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connected to MongoDB: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}