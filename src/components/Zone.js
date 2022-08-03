import React,{useState, useCallback} from 'react'
import LandPhoto from '../Assets/map.png'
import ImageViewer from 'react-simple-image-viewer';

const Zone = () => {


    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
 
    const images = [
        LandPhoto
    ];

    const Data = [
        {
            id: 1,
            tile: 'Festival',
            img: LandPhoto
        },
    ]

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
      }, []);
    
      const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
      }

  return (
    <div className='flex flex-col justify-center items-center text-center w-full h-full pt-10'>
        <div className='rounded-full w-14 p-2 bg-pink-500 text-center flex justify-center items-center'>
            <h1 className='text-4xl text-white font-bold'>02</h1>
        </div>
        <h1 className='text-red-500 text-4xl font-bold text-center'>Festival <span className='text-white'>Zone</span></h1>
        {/* <p className='text-gray-400 pt-2 font-semibold'>Ханаа юу байгааг илтгэх</p> */}
        <div className='flex flex-col justify-center items-center space-y-20 py-20 px-2'>
            {
                Data.map((item, idx) => {
                    return(
                        <div key={idx} className=''>
                            <div className='relative flex justify-center items-center'>
                                <img onClick={() => openImageViewer(idx)} alt='photo' src={item.img} />
                                <div className='absolute bg-dark w-[80%] -bottom-9 rounded-xl p-5 shadow-lg'>
                                    <h1 className='text-white font-bold text-xl'>{item.tile}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {isViewerOpen && (
            <ImageViewer
                src={images}
                currentIndex={currentImage}
                onClose={closeImageViewer}
                disableScroll={false}
                backgroundStyle={{
                    backgroundColor: "rgba(0,0,0,0.9)"
                }}
                closeOnClickOutside={true}
            />
        )}
    </div>
  )
}

export default Zone