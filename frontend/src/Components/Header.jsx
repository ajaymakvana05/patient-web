import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Profile Setting</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded bg-white text-black mr-4"
        />
        <div className="flex items-center">
          <img
            // src="/src/assets/profile.jpg"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-2">
            <p>Lincoln Philips</p>
            <p className="text-sm">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
