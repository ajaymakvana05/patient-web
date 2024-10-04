import React from "react";
import { Link } from "react-router-dom";

const ProfileSidebar = () => {
  return (
    <div className="w-full max-w-[300px] bg-white p-6 shadow-md rounded-lg">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">Lincoln Philips</h2>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Menu</h3>

        <ul className="space-y-4">
          <li className="flex items-center p-3 bg-gray-100 rounded-md hover:bg-gray-200">
            <Link to="/profile" className="text-blue-600 font-medium">
              Profile
            </Link>
          </li>
          <li className="flex items-center p-3 bg-gray-100 rounded-md hover:bg-gray-200">
            <Link to="/change-password" className="text-gray-600 font-medium">
              Change Password
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
