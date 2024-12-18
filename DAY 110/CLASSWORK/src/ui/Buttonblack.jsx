import React from 'react'

export default function Buttonblack({children}) {
  return (
      <button className='bg-black text-white px-[15px] py-[5px] rounded-md hover:bg-red-600'>
        {children}
      </button>
  )
}
