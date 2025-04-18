import apiresponse from "../utils/APIRESPONSE.js"
import validator from "validator"
import bcrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import Doctor from "../models/doctor.model.js"
import jwt from "jsonwebtoken"
// api for adding doctors
 const adddoctors=async(req,res)=>{
    try {
        const{name,email,password,speciality,experience,about,available,fee,address,degree}=req.body
        const imageFile=req.file
        //checking for all data
        if(!name || !email || !password || !speciality || !experience || !about || !available || !fee || !address || !degree || !imageFile){
            return res.status(400).send(new apiresponse(400,null,"Please fill all the fields"))
        }
        // validating email format
        if(!validator.isEmail(email)){
            return res.status(400).send(new apiresponse(400,null,"Please enter a valid email"))
        }
        // validating password format
        if(password.length<8){
            return res.status(400).send(new apiresponse(400,null,"Password should be atleast 8 characters long"))

        }
        // hashing doctorpassord
        const salt= await bcrypt.genSalt(10)
        const hashedpassword=await bcrypt.hash(password,salt)

        //upload image to cloudinary
        const imageupload=await cloudinary.uploader.upload(imageFile.path, {resource_type:'image'})
        const imageurl=imageupload.secure_url
        const doctordata={
            name,
            email,
            password:hashedpassword,
            image:imageurl,
            speciality, 
            experience,
            about,
            available,
            fee,
            address,
            degree,
            date:Date.now()



        }
        const newdoctor=new Doctor(doctordata)
        await newdoctor.save()
        res.status(201).send(new apiresponse(201,newdoctor,"Doctor added successfully"))


        
    } catch (error) {
        console.log(error)
        res.status(500).send(new apiresponse(500,null,"Internal server error"))
        
    }


}
// api for admin login
const loginadmin=async (req,res) => {
    try {
        const{email,password}=req.body
        //checking for all data
        if(!email || !password){
            return res.status(400).send(new apiresponse(400,null,"Please fill all the fields"))
        }
        if(email===process.env.adminemail && password===process.env.adminpassword){
            const token =jwt.sign(email+password,process.env.jwtsecret)
            res.status(200).send(new apiresponse(200,{token:token},"Admin logged in successfully"))

            
       }else{
        res.status(401).send(new apiresponse(401,null,"Invalid credentials"))
       }

    } catch (error) {
        console.log(error)
        res.status(500).send(new apiresponse(500,null,"Internal server error"))
    }
    
}
export {adddoctors ,loginadmin}