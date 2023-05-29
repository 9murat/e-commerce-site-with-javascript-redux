import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterCategory, getCategories } from '../../redux/slices/categorySlice';

export default function Categories() {

  const { categories } = useSelector(state => state.category);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(changeFilterCategory(category.target.textContent)); // target : değer , textContext : değerin metin içeriği
  };

  return (
    <div className=' bg-gray-300 w-2/3  rounded-md'>
      <div className='flex flex-col items-center justify-center mb-2 mt-2 mr-2'>
        {categories.map((category, index) => (
          <div key={index}
            className='  m-2 p-2 border bg-gray-200 rounded cursor-pointer w-40
           hover:bg-gray-400' onClick={handleCategoryClick}>{category}</div>
        ))}
      </div>
    </div>
  );
}



