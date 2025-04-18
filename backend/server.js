import express from "express";
import cors from "cors";
import "dotenv/config"
import { connectdb } from "./config/mongodb.js";
import { connectcloudinary } from "./config/cloudinary.js";
import adminrouter from "./routes/adminroute.js";
//app config
const app=express();
const PORT=process.env.PORT 
connectdb()
connectcloudinary()

// middlewares
app.use(express.json());
app.use(cors());


// api endpoints
app.use("/api/admin",adminrouter)
app.get("/",(req,res)=>{

    res.send("api working")
})
app.listen(PORT,()=>{ 
    console.log(`server is running on port ${PORT}`)
   
})