import React, { useState } from 'react'
import { assets } from '../assets/assets/assets'

const Profile = () => {
  const [userdata,setuserdata]=useState({

    name:"balu",
    image:assets.profile_pic,
    email:"balu@gmail.com",
    phone:"1234567890",
    address:"bengaluru",
    gender:"male",
    dob:"2002-12-08"
  })
  const [isedit,setisedit]=useState(false)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userdata.image}/>
      {
        isedit ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text "  value={userdata.name} onChange={e=>setuserdata(prev=>({...prev,name:e.target.value}))}/>: <p className='text-3xl font-medium text-neutral-800 mt-4'>{userdata.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userdata.email}</p>
          <p className='font-medium'>Phone:</p>
          {
        isedit ? <input className='bg-gray-100 max-w-52' type="text "  value={userdata.phone} onChange={e=>setuserdata(prev=>({...prev,phone:e.target.value}))}/>: <p className='text-blue-400'>{userdata.phone}</p>
      }
      <p className='font-medium'>Adress:</p>
      {
      isedit ? <input  className='bg-gray-100'  type="text "  value={userdata.address} onChange={e=>setuserdata(prev=>({...prev,address:e.target.value}))}/>: <p className='text-blue-400'>{userdata.address}</p>
     }

      </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
      isedit ?
      <select className='max-w-20 bg-gray-100' onChange={(e)=>setuserdata(prev=>({...prev,gender:e.target.value}))} value={userdata.gender}>
        <option value="male">Male

        </option>
        <option value="female">Female

        </option>
      </select>: <p className='text-gray-400'>{userdata.gender}</p>
     }
     <p className='font-medium'>dob:</p>
     {
      isedit ? <input className='max-w-28 bg-gray-100' type="date "  value={userdata.dob} onChange={e=>setuserdata(prev=>({...prev,dob:e.target.value}))}/>: <p className='text-gray-400'>{userdata.dob}</p>
     }

        </div>

      </div>
      <div className='mt-10'>{
        isedit ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all ' onClick={()=>setisedit(false)}>Save information</button> : <button  className='border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all '  onClick={()=>setisedit(ture)}>Edit</button>
        }

      </div>





    </div>
  )
}

export default Profile