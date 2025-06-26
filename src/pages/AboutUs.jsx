import React from 'react';
import { Link } from 'react-router';

const AboutUs = () => {
  return (
    <section className="w-11/12 dark:bg-gray-800' max-w-5xl mx-auto my-20 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">
        About Us
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
        Welcome to <span className="font-bold text-yellow-500">Freelancer Task Marketplace</span> — your go-to platform connecting clients and freelancers worldwide.
      </p>

      <div className="space-y-6 text-gray-700 text-justify md:text-left max-w-3xl mx-auto">
        <p>
          Our mission is to empower both clients and freelancers by providing a modern, responsive, and user-friendly platform where tasks can be posted, browsed, and bid on seamlessly.
        </p>

        <p>
          Built with <span className="font-semibold text-blue-800">React</span>, <span className="font-semibold text-blue-800">Tailwind CSS</span>, and <span className="font-semibold text-blue-800">Firebase</span>, our application ensures smooth performance and interactive features to enhance your freelancing experience.
        </p>

        <p>
          Whether you are a client looking for skilled professionals to get your tasks done or a freelancer seeking exciting projects, our marketplace brings opportunities right to your fingertips.
        </p>

        <p>
          We are committed to fostering a community of trust, collaboration, and growth.
        </p>
      </div>

      <div className="mt-10 text-center">
        <Link to="/auth/sign-up" className="px-6 btn py-3 bg-blue-800  text-white font-semibold rounded-lg transition-colors duration-300">
          Get Started
        </Link >
      </div>
    </section>
  );
};

export default AboutUs;
