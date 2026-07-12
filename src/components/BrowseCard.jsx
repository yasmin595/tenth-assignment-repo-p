import React from 'react';
import { FaTag } from 'react-icons/fa';
import { MdAttachMoney, MdOutlineAccessTime } from 'react-icons/md';
import { Link } from 'react-router';

const BrowseCard = ({ task }) => {
  const { title, category, description, deadline, budget, _id } = task;

  return (
    <div className="w-full h-[360px] flex flex-col justify-between bg-white rounded-xl shadow-lg p-6 transition hover:shadow-2xl">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold text-blue-800 mb-2">
        Task Title: <span className="text-yellow-500">{title}</span>
      </h2>

      {/* Content */}
      <div className="space-y-2 text-blue-800 text-sm md:text-base">
        <p className="flex items-center gap-2">
          <FaTag className="text-yellow-500" />
          <span className="font-semibold">Category:</span> {category}
        </p>

        <p className="flex items-center gap-2">
          <MdAttachMoney className="text-yellow-500" />
          <span className="font-semibold">Budget:</span> {budget}
        </p>

        <p className="flex items-center gap-2">
          <MdOutlineAccessTime className="text-yellow-500" />
          <span className="font-semibold">Deadline:</span> {deadline}
        </p>

        <p>
          <span className="font-semibold">Description:</span>{' '}
          <span className="text-gray-700">{description}</span>
        </p>
      </div>

      {/* Button at bottom */}
      <div className="mt-4">
        <Link to={`/details/${_id}`}>
          <button className="btn w-full bg-white text-blue-800 border border-blue-800 hover:bg-blue-800 hover:text-white">
            View details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BrowseCard;
