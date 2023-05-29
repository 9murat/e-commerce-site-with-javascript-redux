import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, addToFavorites } from '../../redux/slices/cartSlice';
import { AiFillHeart } from 'react-icons/ai';

export default function ProductItem({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleAddToCart = () => {
    dispatch(addToCart({ product: item }));
  };

  const handleAddToFavorites = () => {
    dispatch(addToFavorites({ product:item }))
  }

  return (
    <div className='w-1/3 px-4 mb-8 ml-2 mr-2'>
      <div
        className='flex flex-col justify-center items-center mb-8 cursor-pointer'
        onClick={() => navigate(`/product/${item.id}`)}
      >
        <img src={item.image} alt='' className='w-36 h-36 object-cover rounded' />
        <div className='flex flex-col items-center mt-2'>
          <div className='text-red-500 mb-2 text-xl'>{item.title}</div>
          <div className=' mb-2'>{item.description}</div>
          <div className='text-xl font-semibold'>
            {item.price} <span className='text-xl font-semibold'>TL</span>
          </div>
        </div>
      </div>
      <div
        onClick={handleAddToCart}
        className='flex justify-center items-center bg-gray-300 hover:bg-gray-500 w-40 cursor-pointer rounded-md h-12 text-2xl'
      >
         Add To Cart
      </div>
      <div onClick={handleAddToFavorites}
        className='text-2xl text-green-500 cursor-pointer rounded-md ml-44 w-16'>
        <AiFillHeart size={30} className='ml-4 text-green-500 ' />
      </div>
    </div>
  );
}


