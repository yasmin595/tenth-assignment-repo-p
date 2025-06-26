import { NavLink } from "react-router";
import {
  FaTasks,
  FaPlus,
  FaClipboardList,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { IoHome } from "react-icons/io5";
import { MdTask } from "react-icons/md";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  const navItems = [
    { to: "/", icon: <IoHome />, label: "Home" },
    { to: "/dashboard", icon: <IoHome />, label: "Dashboard" },
    { to: "/allTask", icon: <MdTask />, label: "All Task" },
    { to: "/add-task", icon: <FaPlus />, label: "Add Task" },
    {
      to: `/posted-task/${user?.email}`,
      icon: <FaClipboardList />,
      label: "My Posted Task",
    },
  ];

  return (
    <div className="drawer lg:drawer-open">
      {/* Toggle Button for Mobile */}
      <input id="sidebar-toggle" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content */}
        <label
          htmlFor="sidebar-toggle"
          className="btn bg-blue-800 text-white drawer-button lg:hidden m-4 w-fit"
        >
          ☰ Menu
        </label>
      </div>

      {/* Sidebar content */}
      <div className="drawer-side z-40">
        <label htmlFor="sidebar-toggle" className="drawer-overlay"></label>
        <aside className="w-64 min-h-full bg-white border-r shadow-md p-4">
          <div className="text-2xl font-bold text-blue-800 mb-6">
            Task-ADMIN
          </div>

          <nav className="flex flex-col gap-3">
            {navItems.map(({ to, icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-md font-semibold border transition duration-200 ${
                    isActive
                      ? "bg-blue-800 text-white"
                      : "bg-white text-blue-800 border-blue-800 hover:bg-blue-50"
                  }`
                }
              >
                {icon}
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
