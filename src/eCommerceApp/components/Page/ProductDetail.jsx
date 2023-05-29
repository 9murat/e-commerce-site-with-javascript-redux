import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../redux/slices/productSlice';

export default function ProductDetail() {
  const { id } = useParams();
  const products = useSelector(state => state.product.products);
  const newProduct = products.find(item => item.id === parseInt(id));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div> 
      {newProduct ? (
        // OBJECT TÜRÜ MAP OLMAZ . EĞER ÜRÜN VARSA BU YÖNTEMİ DENE.
        <div className='flex justify-between ml-20 mr-20'>
          <img src={newProduct.image} alt="" className='w-36 h-36 object-cover rounded mr-4' />
          <div className='flex flex-col items-center mt-2 ml-4'>
            <div className='text-red-500 mb-2 text-xl'>{newProduct.title}</div>
            <div className=''>{newProduct.description}</div>
            <div className='text-xl font-semibold'>
              {newProduct.price} <span className='text-xl font-semibold'>TL</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Ürün bulunamadı</p>
        </div>
      )}
    </div>
  );
}
