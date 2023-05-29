import React, { useState } from 'react'
import ProductList from '../Page/ProductList'
import Categories from '../Page/Categories'

export default function Home() {
  return (
    <div className='flex justify-between ml-10'>
      <Categories  />
      <ProductList  />
    </div>
  )
}


