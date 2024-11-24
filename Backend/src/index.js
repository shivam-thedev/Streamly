import { app } from "./app";
import connectDB from '../src/db'
import dotenv from 'dotenv'

dotenv.config({
  path:'./.env'
})

const port = process.env.PORT || 8000

connectDB()
.then(()=>{
  app.on("error",(error)=>{
    console.log("ERROR : ",error)
    throw error
  })
  app.listen(port,()=>{
    console.log("Server is running at PORT :",port)
  })
})
.catch((err)=>{
  console.log("MongoDB connection failed !!!! ",err)
})



