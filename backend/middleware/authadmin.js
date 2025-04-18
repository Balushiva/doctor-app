import jwt from "jsonwebtoken"
import apiresponse from "../utils/APIRESPONSE.js";
//admin authentication midddlware
const authadmin=async(req,res,next)=>{
    try {
     const {atoken}=req.headers;
     if(!atoken){
         return res.status(401).send(new apiresponse(401,null,"Access denied"))
     }
     const decoded=jwt.verify(atoken,process.env.jwtsecret)   
     if(decoded!==process.env.adminemail+process.env.adminpassword){
        return res.status(401).send(new apiresponse(401,null,"Access denied"))

     }
         next()
    } catch (error) {
        console.log(error)
        res.status(500).send(new apiresponse(500,null,"Internal server error"))
    }

}
export default authadmin