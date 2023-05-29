import React from 'react'
import { useDispatch } from 'react-redux'
import { userSignIn } from '../../../redux/slices/userSlice';

export default function UserSignedOut() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(userSignIn())} className='bg-blue-300 hover:bg-blue-400 w-40 flex justify-center items-center cursor-pointer rounded-md text-xl font-mono'>Giriş Yap</button>
    </div>
  )
}
