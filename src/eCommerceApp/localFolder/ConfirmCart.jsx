import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/slices/productSlice';
import ConfirmItem from './ConfirmItem';

export default function ConfirmCart() {
    const carts = useSelector(state => state.cart.carts);
    // console.log(carts.length, 'confirm uzunluğu');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);
    return (
        <div>
            {
                carts.map((item, i) => (
                    <ConfirmItem key={i} confirm={item} />
                ))
            }

        </div>
    )
}



