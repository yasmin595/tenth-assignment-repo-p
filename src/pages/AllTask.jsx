import React from "react";
import { Link, useLoaderData,  } from "react-router";
import { FaTasks } from "react-icons/fa";

const AllTask = () => {
  const tasks = useLoaderData();
 

  
  return (
    <div className="p-4 max-w-full overflow-x-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-800 text-center flex justify-center items-center gap-2">
        <FaTasks className="text-yellow-500" size={30} />
        All Tasks
      </h2>

      <table className="min-w-[700px] w-full table  bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Deadline</th>
            <th className="py-3 px-6 text-left">Budget</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map(({ _id, title, category, deadline, budget }) => (
            <tr
              key={_id}
              className="border-b border-gray-200 hover:bg-blue-50 transition duration-300"
            >
              <td className="py-3 px-6 flex items-center gap-2 font-semibold text-blue-800">
                <FaTasks className="text-yellow-500" />
                {title}
              </td>
              <td className="py-3 px-6">{category}</td>
              <td className="py-3 px-6">{deadline}</td>
              <td className="py-3 px-6 font-semibold text-blue-800">{budget}</td>
              <td className="py-3 px-6">
                <Link to ={`/details/${_id}`}
                 
                  className="bg-yellow-400  text-white font-medium px-1 btn border-white py-1 rounded transition duration-200"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
          {tasks?.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="text-center py-6 text-gray-500 font-medium"
              >
                No tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllTask;
