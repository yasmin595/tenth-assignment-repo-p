import { use, useEffect, useState } from "react";

import { FaTasks, FaUserCircle, FaListUl, FaClock } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {
  const { user } = use(AuthContext);
  const [totalTasks, setTotalTasks] = useState(0);
  const [myTasks, setMyTasks] = useState([]);
  const [LatestTasks, setLatestTasks] = useState([]);

  useEffect(() => {
    fetch("https://tenth-assignment-repo.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => setTotalTasks(data.length));

    if (user?.email) {
      fetch(`https://tenth-assignment-repo.vercel.app/tasks/${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTasks(data));

      fetch("https://tenth-assignment-repo.vercel.app/my-task")
        .then((res) => res.json())
        .then((data) => setLatestTasks(data));
    }
  }, [user]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">
        Welcome, {user?.displayName} 
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 rounded-2xl shadow hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4">
            <FaTasks className="text-4xl" />
            <div>
              <p className="text-lg font-semibold">Total Tasks</p>
              <p className="text-3xl font-bold">{totalTasks}</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-2xl shadow hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4">
            <FaListUl className="text-4xl" />
            <div>
              <p className="text-lg font-semibold">My Tasks</p>
              <p className="text-3xl font-bold">{myTasks.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white p-6 rounded-2xl shadow hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4">
            <FaClock className="text-4xl" />
            <div>
              <p className="text-lg font-semibold">Latest Tasks</p>
              <p className="text-3xl font-bold">{LatestTasks.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="bg-white border mx-auto my-8 border-blue-800 rounded-xl p-6 shadow max-w-lg">
        <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
          <FaUserCircle className="text-blue-800 text-3xl" /> User Info
        </h3>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-20 h-20 rounded-full border-4 border-yellow-500"
          />
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold text-blue-800">
              {user?.displayName}
            </p>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
