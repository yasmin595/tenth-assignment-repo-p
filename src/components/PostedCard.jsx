import React, { useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt, FaGavel } from "react-icons/fa";

const PostedCard = ({ task, emailTask, setEmailTask }) => {
  const { title, _id, category, deadline, budget, bidsCount = 0 } = task;
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1E40AF",
      cancelButtonColor: "#DC2626",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tenth-assignment-repo.vercel.app/task/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your task has been deleted.", "success");
              const remaining = emailTask.filter(t => t._id !== _id);
              setEmailTask(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <div className="w-full md:w-10/12 mx-auto bg-white rounded-xl shadow-lg border border-blue-800 p-4 my-6 overflow-x-auto">
        <table className="table table-zebra w-full text-blue-800 border border-blue-800 rounded-lg">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="text-left">Title</th>
              <th className="text-left">Category</th>
              <th className="text-left">Deadline</th>
              <th className="text-left">Budget</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <td className="font-semibold">{title}</td>
              <td>
                <span className="badge border border-blue-800 text-blue-800 bg-yellow-500">
                  {category}
                </span>
              </td>
              <td>{deadline}</td>
              <td>
                <span className="text-yellow-500 font-bold"> {budget}</span>
              </td>
              <td>
                <div className="flex flex-col gap-2 mt-2">
                  <Link to={`/updated-task/${_id}`}>
                    <button className="btn btn-sm bg-blue-800 text-white hover:bg-blue-900 flex items-center gap-1 w-full">
                      <FaEdit /> Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-sm bg-red-600 hover:bg-red-700 text-white flex items-center gap-1 w-full"
                  >
                    <FaTrashAlt /> Delete
                  </button>
                  <button
                    onClick={() => setShowModal(true)}
                    className="btn btn-sm bg-yellow-500 text-blue-800 hover:bg-yellow-600 flex items-center gap-1 w-full"
                  >
                    <FaGavel /> Bids
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 🔘 Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-6 w-80 shadow-xl border-2 border-blue-800">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Total Bids for <span className="text-yellow-500">{title}</span>
            </h2>
            <p className="text-3xl font-bold text-center text-yellow-500">
              {bidsCount} Bid{bidsCount !== 1 && 's'}
            </p>
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-sm bg-blue-800 text-white hover:bg-blue-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostedCard;
