import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slices/productSlice';
import ProductItem from './ProductItem';

export default function ProductList() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const { filterCategory } = useSelector(state => state.category);

  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === 'inc') {
      return a.price - b.price;
    } else if (sort === 'dec') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const filteredProducts = sortedProducts.filter((sorted) => {
    if (filterCategory === '') {
      return sorted.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    }
    else {
      return sorted.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && sorted.category === filterCategory; // sorted.category ürünün
    }
  });

  // const filter = [...products].sort();
  // const filter2 = filter.filter((sorted1) => { BU KOD NORMAL CATEGORY FILTER İÇİN.
  //   if (filterCategory === '') {
  //     return sorted1.title
  //   } else {
  //     return sorted1.category === filterCategory;
  //   }
  // })

  const renderProducts = filteredProducts.map((item, i) => (
    <ProductItem key={i} item={item} />
  ));

  const chunks = [];
  const chunkSize = 3;

  for (let i = 0; i < renderProducts.length; i += chunkSize) {
    chunks.push(renderProducts.slice(i, i + chunkSize));
  }

  return (
    <div>
      <div className='bg-gray-300 my-5 p-3 flex items-center justify-between h-10 ml-80 mr-40 rounded-md mb-8'>
        <input
          type='text'
          placeholder='Ürün Arayın'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='rounded-sm '
        />
        <select
          onChange={(e) => setSort(e.target.value)}
          className='bg-white '
          name=''
          id=''
        >
          <option value='inc' className=''>
            Artan
          </option>
          <option value='dec'>Azalan</option>
        </select>
      </div>
      <div className='flex flex-wrap ml-10'>
        {chunks.map((chunk, index) => (
          <div key={index} className='flex justify-between w-full'>
            {chunk}
          </div>
        ))}
      </div>
    </div>
  );
}


