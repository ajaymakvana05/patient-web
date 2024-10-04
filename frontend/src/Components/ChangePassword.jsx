import React from "react";

const ChangePassword = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Change Password</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Current Password</label>
          <input type="password" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input type="password" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm New Password</label>
          <input type="password" className="w-full p-2 border rounded" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
