import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserMd,
  FaUsers,
  FaFileInvoiceDollar,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";
import Logo from "../assets/images/logo.svg";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens
    localStorage.removeItem("authToken");
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="w-64 h-full bg-white shadow-lg p-4 flex flex-col">
      {/* Logo */}
      <div className="mb-8 flex justify-center items-center">
        <img src={Logo} alt="Hospital Logo" className="w-45 " />
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/profiledashboard"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                  isActive
                    ? "text-blue "
                    : "text-gray hover:text-blue hover:bg-[]"
                }`
              }
            >
              <FaTachometerAlt />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctordashboard"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                  isActive
                    ? "text-blue-800 bg-blue-100"
                    : "text-gray-600 hover:text-blue-800 hover:bg-blue-50"
                }`
              }
            >
              <FaUserMd />
              <span>Doctor Management</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/patientdashboard"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                  isActive
                    ? "text-blue-800 bg-blue-100"
                    : "text-gray-600 hover:text-blue-800 hover:bg-blue-50"
                }`
              }
            >
              <FaUsers />
              <span>Patient Management</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/billingdashboard"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                  isActive
                    ? "text-blue-800 bg-blue-100"
                    : "text-gray-600 hover:text-blue-800 hover:bg-blue-50"
                }`
              }
            >
              <FaFileInvoiceDollar />
              <span>Billing And Payments</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reportingdashboard"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                  isActive
                    ? "text-blue-800 bg-blue-100"
                    : "text-gray-600 hover:text-blue-800 hover:bg-blue-50"
                }`
              }
            >
              <FaChartLine />
              <span>Reporting And Analytics</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="mt-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
