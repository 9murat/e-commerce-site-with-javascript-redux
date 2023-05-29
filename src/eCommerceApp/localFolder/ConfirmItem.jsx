import React from 'react'
export default function Confirmconfirm({ confirm }) {
  console.log(confirm);

  return (
    <div className='flex justify-center items-center mb-4 mx-20 ml-20'>

      <img src={confirm.image} alt="" className='w-36 h-36 object-cover rounded ml-40' />
      <div className='flex flex-col ml-4 cursor-pointer'>
        <div className='text-red-500 mb-2 text-xl'>{confirm.title}</div>
        <div className='mb-2 mr-10'>{confirm.description}</div>
        <div className='text-xl font-semibold'>{confirm.price}</div>
        <div className='text-xl'>({confirm.quantity})</div>
      </div>
    </div>
  )
}



