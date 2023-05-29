import React from 'react'
import NavbarLeft from './NavbarLeft'
import { useSelector } from 'react-redux'
import UserSignedIn from './userSign/UserSignedIn';
import UserSignedOut from './userSign/UserSignedOut';

export default function Navbar() {
    const { isSignIn } = useSelector(state => state.user);
    return (
        <div className='flex justify-between mt-4 p-20 ml-8 mr-8 bg-gray-200 mb-5 rounded-md'>
            <NavbarLeft />
            {
                isSignIn ? <UserSignedIn /> : < UserSignedOut />
            }
            

        </div>
    )
}
