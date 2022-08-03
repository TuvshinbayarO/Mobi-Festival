import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Apple from '../Assets/apu.png'
import Rock from '../Assets/4od.jpg'
import Hook from '../Assets/hook.png'

const OurCompany = () => {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
      };

  return (
    <div className='text-center w-full h-full pt-10 pb-10'>
        <div className='flex justify-center items-center'>
            <div className='rounded-full w-14 p-2 bg-pink-500 text-center flex justify-center items-center'>
                <h1 className='text-4xl text-white font-bold'>05</h1>
            </div>
        </div>
        <h1 className='text-red-500 text-4xl font-bold pt-2 flex item justify-center items-center text-center pb-14'>Хамтрагч <span className='text-white'> байгуулга</span></h1>
        <Slider {...settings}>
            <div className="flex justify-center items-center">
                <div className="flex justify-between items-center px-2">
                    <img alt="profile" className=" w-24 rounded-full" src={Apple} />
                    <img alt="profile" className=" w-24 rounded-full" src={Rock} />
                    <img alt="profile" className=" w-24 rounded-full" src={Hook} />
                </div>
            </div>
            
        </Slider>
    </div>
  )
}

export default OurCompany