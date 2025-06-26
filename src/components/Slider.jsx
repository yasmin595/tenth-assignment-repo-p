import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import 'swiper/css';
import 'swiper/css/pagination';

import Image1 from '../assets/photo-1596.jpeg';
import Image2 from '../assets/premium_photo-12.jpeg';
import Image3 from '../assets/premium_photo-1661.jpeg';
import Image4 from '../assets/premium_photo-1667.jpeg';

const slidesData = [
  {
    img: Image1,
    title: 'We are looking for',
    subtitle: 'Bid on Unique Task from Around the World',
    desc: 'Platform a collection of rare, budget friendly, and super skills based'
  },
  {
    img: Image2,
    title: 'We are looking for',
    subtitle: 'Bid on Unique Task from Around the World',
    desc: 'Platform a collection of rare, budget friendly, and super skills based'
  },
  {
    img: Image3,
    title: 'We are looking for',
    subtitle: 'Bid on Unique Task from Around the World',
    desc: 'Platform a collection of rare, budget friendly, and super skills based'
  },
  {
    img: Image4,
    title: 'We are looking for',
    subtitle: 'Bid on Unique Task from Around the World',
    desc: 'Platform a collection of rare, budget friendly, and super skills based'
  },
];

const Slider = () => {
  return (
    <div className="pb-6 mb-10">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="rounded-xl"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
          <div className="relative w-full max-w-6xl mx-auto h-[300px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
  {/* Image */}
  <img
    src={slide.img}
    alt="slider"
    className="w-full h-full object-cover opacity-80"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>

  {/* Text */}
  <div className="absolute inset-0 flex items-center px-4 md:px-16">
    <div className="max-w-xl text-white space-y-5">
      <h1 className="text-2xl md:text-4xl font-bold">
        {slide.title}{' '}
        <span className="text-yellow-500">
          <Typewriter
            words={['a Developer', 'a Designer', 'a Writer']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <h2 className="text-lg md:text-2xl font-semibold text-blue-300">
        {slide.subtitle}
      </h2>
      <p className="text-sm md:text-base text-gray-200">
        {slide.desc}
      </p>
    </div>
  </div>
</div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
