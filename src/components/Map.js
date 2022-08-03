import React from 'react'

const Map = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center w-full h-full pt-10 pb-10'>
        <div className='rounded-full w-14 p-2 bg-pink-500 text-center flex justify-center items-center'>
            <h1 className='text-4xl text-white font-bold'>06</h1>
        </div>
        <h1 className='text-red-500 text-4xl font-bold w-1/2 text-center pt-2'>Хаяг</h1>
        <div className='flex flex-col justify-center items-center text-center pt-5 w-full'>
            <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.6043697170144!2d107.13905282732921!3d47.924692126677726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9684dbb37a6a05%3A0xffd0c30c45a1350d!2sHotel%20Mongolia!5e0!3m2!1sen!2smn!4v1659330381924!5m2!1sen!2smn" width="600" height="240" title="Mobi festival" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Map