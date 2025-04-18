import mongoose from "mongoose"

 export const connectdb=async () => {
  
       try {
        mongoose.connection.on("connected",()=>{
            console.log("Connected to MongoDB")
        })
        await mongoose.connect(process.env.mongurl)
        
       } catch (error) {
        console.log(error)
        process.exit(1)

       }
  
    
}