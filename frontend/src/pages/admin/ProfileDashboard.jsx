import React from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import ProfileForm from "../../Components/ProfileSetting";
import ProfileSetting from "../../Components/ProfileSetting";
import { Outlet, Route, Routes } from "react-router-dom";
import Profile from "../../Components/Profile";

const ProfileDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col h-full">
          <Profile />
        </div>
      </div>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default ProfileDashboard;
