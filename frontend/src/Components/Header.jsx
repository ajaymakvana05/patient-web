import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import profileIcon from "../assets/images/profile.svg";
import ProfileSidebar from "./profileSidebar";
import { Outlet } from "react-router-dom";
import SearchBarWithDropdown from "./SearchBarWithDropdown";
import NotificationIcon from "../assets/images/notification.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center flex-wrap">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
        Profile Setting
      </h1>

      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <div className="hidden md:block">
          <SearchBarWithDropdown />
        </div>

        <div className="relative bg-gray-100 rounded-full p-2 shadow-md cursor-pointer flex justify-center items-center">
          <img
            src={NotificationIcon}
            alt="Notification"
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </div>

        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={handleOpen}
        >
          <img
            src={profileIcon}
            alt="User"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
          <div className="hidden md:block text-black">
            <p>Lincoln Philips</p>
            <p className="text-sm">Admin</p>
          </div>
        </div>
      </div>

      <Popup
        open={open}
        closeOnDocumentClick
        onClose={handleClose}
        contentStyle={{
          width: "90%",
          maxWidth: "900px", 
          borderRadius: "1rem", 
          padding: "0", 
        }}
        overlayStyle={{
          background: "rgba(0, 0, 0, 0.6)", 
        }}
        className="popup-container" 
      >
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-full h-full">
          <div className="hidden md:flex md:flex-shrink-0 md:w-1/3 bg-gray-50 p-4 rounded-l-lg">
            <ProfileSidebar />
          </div>

          <div className="flex-grow p-4 md:w-2/3">
            <Outlet />
          </div>
        </div>
      </Popup>
    </header>
  );
};

export default Header;
