import React from "react";

const ChangePassword = () => {
  return (
    <div className="m-0 w-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Change Password</h1>
      <p className="text-sm">
        To change your password, please fill in the fields below. Your password
        must contain at least 8 characters, it must also include at least one
        upper case letter, one lower case letter, one number and one special
        character.
      </p>
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
        <button className="bg-blue text-white px-4 py-2 rounded">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
