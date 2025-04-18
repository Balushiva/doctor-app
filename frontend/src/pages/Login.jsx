import React from 'react'
import { useState } from 'react'

const Login = () => {
  const[state,setstate]=useState("sign up")
  const[email,setemail]=useState('')
  const[name,setname]=useState('')
  
const[password,setpassword]=useState('')
const onsubmithandler=async(event)=>{
  event.preventDefault()

}
  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onsubmithandler}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-e-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state==="sign up" ? "create account" : "login"}</p>
        <p>Please {state==="Sign up" ? "sign up" : "Log in"}  to book appointment</p>
        {
          state ==="sign up" && <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded wifull p-2 mt-1' type='text ' value={name} onChange={(e)=>setname(e.target.value)} />
        </div>
        }
       
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded wifull p-2 mt-1' type='text ' value={email} onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div className='w-full'> 
          <p>Password</p>
          <input className='border border-zinc-300 rounded wifull p-2 mt-1' type='text ' value={password} onChange={(e)=>setpassword(e.target.value)} />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md  text-base'>{state==="sign up" ? "Create account" : "Login"}</button>
        {state==="sign up" ? <p>Already have an account?<span onClick={()=>setstate("login")} className='text-primary underline cursor-pointer'>login here</span></p> :<p>create an new account? <span onClick={()=>setstate("sign up")} className='text-primary underline cursor-pointer'>click here</span></p>}

      </div>

    </form>
  )
}

export default Login