import React from 'react'

function Navbar() {
  return (
      <div className='flex h-[10vh] gap-2 py-3 px-1'>
          {/* Input */}
          <div className='flex items-center bg-slate-300  rounded-lg overflow-hidden'>
              <input type="text" className='w-[400px]  flex-1 px-2 outline-none bg-transparent' placeholder='Search for places....' />
              <button className='px-4 h-full bg-orange-500'>Search</button> 
          </div>
          {/* Right Side */}
          <div className='w-full flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                  <h2 className='text-xl font-semibold text-gray-600'>Today</h2>
                  <h2 className='text-xl font-semibold'>Week</h2>
              </div>

              <div className='flex items-center flex-row gap-4'>
                  <h2 className='px-3 py-1 rounded-full text-center font-bold bg-black text-white'>C</h2>
                  <h2 className=''>F</h2>
                  <p className='h-8 w-8 bg-gray-700 rounded-lg'></p>
              </div>
          </div>
    </div>
  )
}

export default Navbar