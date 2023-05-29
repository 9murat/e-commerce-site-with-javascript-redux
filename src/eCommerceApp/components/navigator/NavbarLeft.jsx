import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavbarLeft() {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate('/')} className='cursor-pointer bg-orange-400 flex w-auto items-center justify-center rounded-md text-2xl font-bold pl-4 pr-4'>
        My E-Commerce Site
    </div>
  )
}
