import React from 'react';
import { FaTag } from 'react-icons/fa';
import { MdAttachMoney, MdOutlineAccessTime } from 'react-icons/md';
import { Link } from 'react-router';

const BrowseCard = ({task}) => {
const {title, category, description, deadline, budget , _id } = task

//  {
//     "_id": "682dfa2347da1f9bdd28f345",
//     "title": "design",
//     "category": "Design",
//     "description": "design from heart",
//     "deadline": "31may 2025",
//     "budget": "200000",
//     "name": "rifat",
//     "email": "mdrifatnicevedio202@gmail.com"
//   },

    return (
       <div className="w-11/12 h-80 p mx-auto  bg-white  rounded-xl shadow-lg p-6 my-4 transition hover:shadow-2xl">
      <h2 className="text-center text-2xl font-bold text-blue-800 mb-4">
        Task Title: <span className="text-yellow-500">{title}</span>
      </h2>

      <div className="space-y-3 text-blue-800 text-sm md:text-base">
        <p className="flex items-center gap-2">
          <FaTag className="text-yellow-500" />
          <span className="font-semibold">Category:</span> {category}
        </p>

        <p className="flex items-center gap-2">
          <MdAttachMoney className="text-yellow-500" />
          <span className="font-semibold">Budget:</span>  {budget}
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
      <div>
    <Link to ={`/details/${_id}`}>
    <button className='btn my-4 bg-white text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white'>View details</button>
    </Link>
   </div>
    </div>
    );
};

export default BrowseCard;