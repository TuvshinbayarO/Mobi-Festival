import React from 'react'
import Artists from '../Assets/ARTISTS.png'

function Artist() {

  return (
    <div className='flex flex-col justify-center items-center text-center w-full h-full pt-10 pb-10'>
        <div className='rounded-full w-14 p-2 bg-pink-500 text-center flex justify-center items-center'>
            <h1 className='text-4xl text-white font-bold'>04</h1>
        </div>
        <h1 className='text-red-500 text-4xl font-bold w-1/2 text-center'>Artist <span className='text-white'></span></h1>
        <div className='flex flex-col justify-center items-center text-center pt-5'>
            <img alt='Alt' className='w-[95%] rounded-lg' src={Artists} />
            {/* <h1 className='flex flex-col justify-center items-center p-10 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 space-y-5 w-[80%] outline outline-offset-2 outline-1 outline-pink-500 rounded-lg'>Coming Soon</h1> */}
        </div>
    </div>
  )
}

export default Artist