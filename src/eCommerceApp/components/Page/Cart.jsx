import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slices/productSlice';
import CartDetail from './CartDetail';
import { confirmProducts, removeAllCart } from '../../redux/slices/cartSlice';

export default function Cart() {
  const { carts, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleConfirmCart = () => {
    dispatch(confirmProducts({ product: carts }));

  };
  const handleRemoveAllCart = () => {
    dispatch(removeAllCart())
  };

  return (
    <div>
      {
        carts.length >= 1 &&
        <div className='flex justify-end mr-10'>
          <div className=' flex ml-8 text-2xl text-red-500 bg-gray-300 hover:bg-gray-400 w-36 cursor-pointer rounded-md mb-8 ' onClick={handleRemoveAllCart}>Remove All Cart</div>
        </div>
      }

      <div className='flex flex-col'>
        {carts.map((item, i) => (
          <CartDetail key={i} item={item} />
        ))}

        <div className='flex justify-center items-center mb-4'>
          <div className='text-2xl font-bold text-blue-600'>Total Cart Price : {totalPrice.toFixed(2)} <span>TL</span></div>
        </div>

        {
          carts.length >= 1 &&
          <div className='flex justify-center'>
            <div className='text-2xl text-red-500 bg-gray-300 hover:bg-gray-400 w-36 cursor-pointer rounded-md mb-8' onClick={handleConfirmCart}>Confirm Cart</div>
          </div>
        }

      </div>
    </div>
  );
}



