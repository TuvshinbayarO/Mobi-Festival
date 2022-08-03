import React from 'react'

const Video = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center w-full h-full'>
        <div className='rounded-full w-14 p-2 bg-pink-500 flex justify-center items-center text-center'>
            <h1 className='text-4xl font-bold text-white'>01</h1>
        </div>
        <h1 className='text-red-500 text-4xl font-bold text-center w-[60%]'>Mobi <span className='text-white'>festival intro</span></h1>
        <div className='pt-5 px-2'>
        <iframe width="330" height="240" src="https://www.youtube.com/embed/8G_ORAIztU4?list=TLGGMfBJMdiTVMAwMzA4MjAyMg" title="Mobi festival last" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default Video