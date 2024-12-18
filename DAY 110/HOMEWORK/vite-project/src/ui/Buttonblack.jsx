import React from 'react'

export default function Buttonblack({children}) {
  return (
    <div>
      <button className='bg-black text-white px-4 rounded-sm hover:bg-pink-600 hover:text-white hover:rounded-md transition-all delay-100'>
        {children}
      </button>
    </div>
  )
}
