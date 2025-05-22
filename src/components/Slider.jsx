import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image1 from '../assets/photo-1596.jpeg'
import Image2 from '../assets/premium_photo-12.jpeg'
import Image3 from '../assets/premium_photo-1661.jpeg'
import Image4 from '../assets/premium_photo-1667.jpeg'
import {  Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
const Slider = () => {
    return (
     <div className='py-4 my-8 '>

<Swiper
 modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>

    <div className='flex justify-center w-11/12 mx-auto'>
    <div className="relative bg-gray-700 text-white">
<div className="absolute inset-0 overflow-hidden">
    <img src={Image1} alt="Car picture" className="w-full h-full object-cover opacity-70" />
</div>
<div className="relative container mx-auto px-4 py-16 md:py-22">
    <div className="max-w-lg">
        <h1 className="text-3xl md:text-3xl font-bold mb-8">Bid on Unique Task from Around the World</h1>
        <p className="text-lg mb-8">
           Platform a collection of rare, budget friendly, and super skills
        </p>
       
    </div>
    </div>
   </div>
    </div>

        </SwiperSlide>
        
        <SwiperSlide>


        <div className='flex justify-center w-11/12 mx-auto'>
    <div className="relative bg-gray-700 text-white">
<div className="absolute inset-0 overflow-hidden">
    <img src={Image2} alt="Car picture" className="w-full h-full object-cover opacity-70" />
</div>
<div className="relative container mx-auto px-4 py-16 md:py-22">
    <div className="max-w-lg">
        <h1 className="text-3xl md:text-3xl font-bold mb-8">Bid on Unique Task from Around the World</h1>
        <p className="text-lg mb-8">
         Platform a collection of rare, budget friendly, and super skills
        </p>
       
    </div>
    </div>
   </div>
    </div>
    </SwiperSlide>
      
        <SwiperSlide>

        <div className='flex justify-center w-11/12 mx-auto'>
    <div className="relative bg-gray-700 text-white">
<div className="absolute inset-0 overflow-hidden">
    <img src={Image3} alt="Car picture" className="w-full h-full object-cover opacity-70" />
</div>
<div className="relative container mx-auto px-4 py-16 md:py-22">
    <div className="max-w-lg">
        <h1 className="text-3xl md:text-3xl font-bold mb-8">Bid on Unique Task from Around the World</h1>
        <p className="text-lg mb-8">
            Platform a collection of rare, budget friendly, and super skills
        </p>
       
    </div>
    </div>
   </div>
    </div>
        </SwiperSlide>
  
        <SwiperSlide>
        <div className='flex justify-center w-11/12 mx-auto'>
    <div className="relative bg-gray-700 text-white">
<div className="absolute inset-0 overflow-hidden">
    <img src={Image4} alt="Car picture" className="w-full h-full object-cover opacity-70" />
</div>
<div className="relative container mx-auto px-4 py-16 md:py-22">
    <div className="max-w-lg">
        <h1 className="text-3xl md:text-3xl font-bold mb-8">Bid on Unique Task from Around the World</h1>
        <p className="text-lg mb-8">
             Platform a collection of rare, budget friendly, and super skills
        </p>
       
    </div>
    </div>
   </div>
    </div>
        </SwiperSlide>
    
      </Swiper>
     </div>
    );
};

export default Slider;