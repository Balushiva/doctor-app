import express from "express";
import { adddoctors,loginadmin } from "../controllers/admincontroller.js";
import upload from "../middleware/multer.js";
import authadmin from "../middleware/authadmin.js";
const adminrouter=express.Router();
adminrouter.post("/adddoctor",authadmin,upload.single("image"),adddoctors)
adminrouter.post("/login",authadmin,loginadmin)

export default adminrouter