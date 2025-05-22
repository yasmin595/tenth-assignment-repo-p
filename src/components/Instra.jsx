import React from 'react';
import image1 from '../assets/images (29).jpeg'
import image2 from '../assets/images (30).jpeg'
import image3 from '../assets/images (33).jpeg'
import image4 from '../assets/images (35).jpeg'
import image5 from '../assets/images (36).jpeg'
import image6 from '../assets/download (31).jpeg'


const Instra = () => {
    return (
        <div className='w-11/12 mx-auto my-16 '>
           <div className=' md:flex flex-col justify-center text-center  py-4'>  <p>Follow Us Now</p>
            <h1 className='font-bold text-secondary'>Follow on Instagram</h1></div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
<div >
    <img  className='w-[200px] h-[250px] rounded' src={image1} alt="" />
</div>
<div >
    <img  className='w-[200px] h-[250px] rounded' src={image2} alt="" />
</div>
<div >
    <img  className='w-[200px] h-[250px] rounded' src={image3} alt="" />
</div>
<div >
    <img  className='w-[200px] h-[250px] rounded' src={image4} alt="" />
</div>
<div >
    <img className='w-[200px] h-[250px] rounded' src={image5} alt="" />
</div>
<div >
    <img  className='w-[200px] h-[250px] rounded' src={image6} alt="" />
</div>

            </div>
        </div>
    );
};

export default Instra;