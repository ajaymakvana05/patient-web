import React, { useState } from "react";
import Popup from "reactjs-popup"; // Import Popup
import "reactjs-popup/dist/index.css"; // Import CSS for Popup
import profileIcon from "../assets/images/profile.svg";
import Profile from "./Profile";
import ProfileSidebar from "./profileSidebar";
import { Outlet } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false); // State to manage pop-up visibility

  const handleOpen = () => setOpen(true); // Function to open the pop-up
  const handleClose = () => setOpen(false); // Function to close the pop-up

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
            src={profileIcon}
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer" // Added cursor pointer
            onClick={handleOpen} // Open pop-up on click
          />
          <div className="ml-2 text-black">
            <p>Lincoln Philips</p>
            <p className="text-sm">Admin</p>
          </div>
        </div>
      </div>

      {/* Profile Pop-Up */}
      <Popup
        open={open}
        closeOnDocumentClick
        onClose={handleClose}
        contentStyle={{ maxWidth: "1000px", width: "100%" }}
      >
        <div className="flex bg-white ">
          <ProfileSidebar />
          <Outlet />
        </div>
      </Popup>
    </header>
  );
};

export default Header;
