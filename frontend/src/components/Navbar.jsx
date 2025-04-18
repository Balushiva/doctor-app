import React, { useState } from "react";
import { assets } from "../assets/assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showmenu,setshowmenu]=useState(false)
  const[token,settoken]=useState(true)

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      <img onClick={()=>navigate("/")} className="w-44 cursor-pointer" src={assets.logo}  />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to ="/">
          <li className="py-1 hover:scale-105 transition-all duration-300">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
        <NavLink to="/doctors"> 
          <li className="py-1 hover:scale-105 transition-all duration-300">All doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 hover:scale-105 transition-all duration-300">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
        <NavLink to="/contacts">
          <li className="py-1 hover:scale-105 transition-all duration-300">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token? <div className="flex items-center gap-2 cursor-pointer group relative">
          <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
          <img className="w-2.5" src={assets.dropdown_icon} alt=""  />
          <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
              <p onClick={()=>navigate("/profile")} className="hover:text-black cursor-pointer">my profile</p>
              <p onClick={()=>navigate("/myappointments")}className="hover:text-black cursor-pointer">my appointments</p>
              <p  onClick={()=>settoken(false)}
              className="hover:text-black cursor-pointer"> Logout</p>

            </div>
          </div>
        </div> :<button onClick={()=>navigate("/login")} className="bg-primary text-white px-8 py-3 rounded-full font-normal hidden md:block hover:scale-105 transition-all duration-300 ">Create Account</button>}
        <img onClick={()=>setshowmenu(true)}  className="w-6 md:hidden" src={assets.menu_icon}/>
        <div className={` ${showmenu ? "fixed w-full": "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" srcset="" />
            <img className="w-7" onClick={()=>setshowmenu(false)} src={assets.cross_icon}  />


          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={()=>setshowmenu(false)} to="/"><p>Home</p></NavLink>
            <NavLink   onClick={()=>setshowmenu(false)}  to="/doctors"><p>ALL docotors</p></NavLink>
            <NavLink onClick={()=>setshowmenu(false)}  to="/about"><p>about</p></NavLink>
            <NavLink onClick={()=>setshowmenu(false)}  to="/contact"><p>about</p></NavLink>


          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
