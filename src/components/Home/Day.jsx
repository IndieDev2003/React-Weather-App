import React from 'react'
import rain from '../../assets/rain.svg'

function Day() {
  return (
      <div className='flex-shrink-0 h-[150px] w-[125px] border shadow-lg drop-shadow-xl bg-white flex flex-col justify-between items-center px-4 py-2 rounded-lg'>
          <h3>Sunday</h3>
          <img src={rain} className='h-16' alt="" />
          <h3>15 <span>13</span></h3>
    </div>
  )
}

export default Day