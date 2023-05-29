import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/slices/productSlice';
import { addToCart, removeFromFavorites } from '../../redux/slices/cartSlice';

export default function FavoritesProduct() {
    const favoriteItems = useSelector(state => state.cart.favoriteItems);
    console.log(favoriteItems, 'favori değer');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const handleRemoveFavorites = (item) => {
        dispatch(removeFromFavorites({ id: item.id }))
    }


    return (
        <div>
            {favoriteItems.map((item, i) => (
                <div key={i} className='flex justify-between object-cover rounded ml-32 mr-36 mt-6 mb-7'>
                    <img src={item.image} alt='' className='w-36 h-36 object-cover rounded' />
                    <div className='flex flex-col items-center mt-2 ml-4'>
                        <div className='text-red-500 mb-2 text-xl'>{item.title}</div>
                        <div className='text-sm text-gray-500 mb-2'>{item.description}</div>
                        <div className='text-xl font-semibold'>
                            {item.price} <span className='text-xl font-semibold'>TL</span>
                        </div>
                        <div
                            onClick={() => dispatch(addToCart({ product: item }))}
                            className='flex justify-center items-center bg-gray-300 hover:bg-gray-500 w-40 cursor-pointer rounded-md h-12 text-2xl mt-4'
                        >
                            Sepete Ekle
                        </div>
                        <div onClick={() => handleRemoveFavorites(item)}>
                            Favdan Sil
                        </div>

                    </div>
                </div>
            ))
            }
        </div>
    )
}




