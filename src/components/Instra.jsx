import React from 'react';
import image1 from '../assets/images (29).jpeg';
import image2 from '../assets/images (30).jpeg';
import image3 from '../assets/images (33).jpeg';
import image4 from '../assets/images (35).jpeg';
import image5 from '../assets/images (36).jpeg';
import image6 from '../assets/download (31).jpeg';

const Instra = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <section className=" mx-auto my-16 bg-white rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-gray-600 text-lg mb-1 uppercase tracking-wide font-semibold">
          Follow Us Now
        </p>
        <h1 className="text-3xl font-extrabold text-blue-800">
          Follow on{' '}
          <span className="text-yellow-500">Instagram</span>
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={img}
              alt={`instagram-${i}`}
              className="w-[200px] h-[250px] object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instra;
