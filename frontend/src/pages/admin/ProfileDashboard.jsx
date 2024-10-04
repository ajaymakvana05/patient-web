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
          <div
            className=" p-8 h-[296px]"
            style={{
              background:
                "linear-gradient(107.38deg, #4C49ED 2.61%, #020067 101.2%)",
            }}
          >
            <h2 className="font-medium text-2xl text-white">Profile Setting</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
