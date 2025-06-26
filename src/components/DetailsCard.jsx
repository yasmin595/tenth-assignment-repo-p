import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaUser, FaCoins, FaClock, FaGavel } from 'react-icons/fa';
import { MdOutlineDescription } from "react-icons/md";
import Swal from 'sweetalert2';

const DetailsCard = ({ cards }) => {
  const {
    title,
    _id,
    name,
    email,
    category,
    description,
    deadline,
    budget,
    bidsCount: initialBids = 0,
  } = cards;

  const [bidsCount, setBidsCount] = useState(initialBids);
  const [isLoading, setIsLoading] = useState(false);

  // When cards prop changes, sync bidsCount state
  useEffect(() => {
    setBidsCount(initialBids);
  }, [initialBids, _id]);

  const handleBidsClick = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://tenth-assignment-repo.vercel.app/tasks/${_id}/bid`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (data.modifiedCount > 0) {
        setBidsCount(prev => prev + 1); // increase locally
        Swal.fire("Success!", "Bid placed successfully!", "success");
      } else {
        Swal.fire("Error!", "Failed to place bid.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl border w-full md:w-[400px] mx-auto">
      <div className="card-body space-y-3">
        <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
          <FaGavel className="text-yellow-500" />
          {title}
        </h2>

        <div className="flex justify-between items-center">
          <span className="badge  bg-white text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white">
            Total Bids: {bidsCount}
          </span>
          <span className="badge bg-yellow-500 text-white">{category}</span>
        </div>

        <p className="flex items-center gap-2">
          <FaCoins className="text-yellow-500" /> Budget: {budget}
        </p>
        <p className="flex items-center gap-2">
          <FaClock className="text-blue-700" /> Deadline: {deadline}
        </p>
        <p className="flex items-center gap-2">
          <FaUser className="text-blue-800" /> Name: {name}
        </p>
        <p className="flex items-center gap-2">
          <FaEnvelope className="text-blue-800" /> Email: {email}
        </p>
        <p className="flex items-start gap-2">
          <MdOutlineDescription className="text-blue-800 mt-1" /> <span>{description}</span>
        </p>

        <div className="card-actions mt-4">
          <button
            onClick={handleBidsClick}
            className="btn  bg-white text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white w-full"
            disabled={isLoading}
          >
            {isLoading ? "Bidding..." : "Bid"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
