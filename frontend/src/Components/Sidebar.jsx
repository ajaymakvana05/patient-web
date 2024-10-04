import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-white shadow-lg p-4">
      <div className="mb-8">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link
              to="/profiledashboard"
              className="text-blue-600 hover:underline"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/change-password" className="text-gray-600">
              Change Password
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/terms-conditions" className="text-gray-600">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="text-gray-600">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
