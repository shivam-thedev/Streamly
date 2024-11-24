import mongoose from 'mongoose'
import { DB_NAME } from '../constants'

export default connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected || DB Host : ${connectionInstance}`)
    } catch (error) {
        console.log("MongoDB connection failed!!",error)
        process.exit(1);
    }
}