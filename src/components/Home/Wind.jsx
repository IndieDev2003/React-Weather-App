import React from 'react'

function Wind() {
  return (
      <div className="h-[206px] w-[162px] px-6 py-5 border shadow-xl rounded-lg drop-shadow-lg flex flex-col justify-between">
          <h2 className='text-gray-400'>Wind Status</h2>
      <h3><span className='text-6xl'>7.7</span><span>km/h</span></h3>
      <h3>Slow</h3>
    </div>
  )
}

export default Wind