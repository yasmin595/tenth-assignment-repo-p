import React from 'react';
import { MdOutlineAccessTime, MdAttachMoney } from "react-icons/md";
import { FaTag } from "react-icons/fa";

const TaskCard = ({ task }) => {
  const { title, category, description, deadline, budget } = task;

  return (
    <div className="w-11/12  mx-auto bg-white  rounded-xl shadow-lg p-6 my-6 transition hover:shadow-2xl">
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
    </div>
  );
};

export default TaskCard;
