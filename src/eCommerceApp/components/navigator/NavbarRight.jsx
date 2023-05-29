import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignOut } from '../../redux/slices/userSlice';
export default function NavbarRight() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { itemCount } = useSelector(state => state.cart);
    return (
        <div className=' '>
            <div className='flex justify-between float-right bg-white rounded-md w-60'>
                <AiOutlineHeart onClick={() => navigate('favorites')} size={30} className='ml-4 text-red-500 cursor-pointer' />
                <div onClick={() =>
                    navigate('cart')} className='text-green-600'>
                    {itemCount}
                    <AiOutlineShoppingCart
                        size={30} className=' ml-3 mr-3 cursor-pointer'
                    /></div>
                <div onClick={() =>
                    dispatch(userSignOut())}
                    className='
                     hover:bg-blue-400
                      bg-blue-300 h-8 mr-2 mt-2 w-24 
                      cursor-pointer rounded-md text-xl'>Çıkış Yap
                </div>


            </div>
        </div>
    )
}
