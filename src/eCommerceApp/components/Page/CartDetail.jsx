import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, decrementAmount, removeFromCart, addToFavorites } from '../../redux/slices/cartSlice';
import { AiFillHeart } from 'react-icons/ai';

export default function CartDetail({ item }) {
  const dispatch = useDispatch();

  const handleDecrementAmount = () => {
    dispatch(decrementAmount({ productId: item.id }));
  }
  const handleRemoveProduct = () => {
    dispatch(removeFromCart({ product: item }));
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ product: item }));
  }
  const handleAddToFavorites = () => {
    dispatch(addToFavorites({ product: item }));
  }


  return (
    <>
      <div className='flex justify-center items-center mb-4 mx-20 ml-20 mr-20'>
        <img src={item.image} alt="" className='w-36 h-36 object-cover rounded ml-40' />
        <div className='flex flex-col ml-4 cursor-pointer'>
          <div className='text-red-500 mb-2 text-xl'>{item.title}</div>
          <div className='mb-2 mr-10'>{item.description}</div>
          <div className='text-xl font-semibold'>{item.price} <span className='text-xl font-semibold'>TL</span></div>
          <div className='flex justify-between w-32 ml-64 h-10 mt-3 mb-3'>
            <div onClick={handleDecrementAmount} className='flex text-5xl mr-3 mb-4 ml-1 items-center justify-center cursor-pointer'>-</div>
            <div className='text-xl'>( {item.quantity} )</div>
            <div onClick={handleAddToCart} className='flex text-4xl mb-3 items-center justify-center cursor-pointer'>+</div>
          </div>
          <div className='flex justify-between items-center w-52 ml-52 mr-56'>
            <div className='text-2xl text-red-500 bg-gray-300 hover:bg-gray-400 w-36 cursor-pointer rounded-md ' onClick={handleRemoveProduct}>Ürünü Sil</div>
            <div onClick={handleAddToFavorites} className='text-2xl justify-center items-center text-green-500 hover:text-red-600 cursor-pointer rounded-md ml-8'>
              <AiFillHeart size={30} className=' text-green-500' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
