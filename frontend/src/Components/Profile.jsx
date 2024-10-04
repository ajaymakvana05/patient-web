import React from "react";
import Sidebar from "./Sidebar";
import ProfileSidebar from "./profileSidebar";
import { Link } from "react-router-dom";
import Edit from "../assets/images/edit.svg";

const Profile = () => {
  return (
    <div className="flex flex-col h-10">
      <div className="flex ">
        <div className="  p-6 ">
          <div className="flex justify-between  mb-6">
            <h2 className="text-xl font-bold">Profile</h2>
            <button className="bg-blue text-white px-4 py-2 rounded-lg ">
              <Link to="/profiledashboard/editprofileform" className="flex">
                <img src={Edit} alt="" />
                Edit Profile
              </Link>
            </button>
          </div>
          <form>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="first-name"
                  required
                />
                <label
                  htmlFor="first-name"
                  style={{ fontWeight: "700" }}
                  className="absolute left-3 top-2.5 text-gray transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  First Name
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer fs-[16px] w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="last-name"
                  required
                />
                <label
                  htmlFor="last-name"
                  style={{ fontWeight: "700" }}
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  Last Name
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="email"
                  id="email"
                  required
                />
                <label
                  htmlFor="email"
                  style={{ fontWeight: "700" }}
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="phone"
                  required
                />
                <label
                  htmlFor="phone"
                  style={{ fontWeight: "700" }}
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  Phone Number
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="hospital-name"
                  required
                />
                <label
                  htmlFor="hospital-name"
                  style={{ fontWeight: "700" }}
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  Hospital Name
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="gender"
                  required
                />
                <label
                  htmlFor="gender"
                  style={{ fontWeight: "700" }}
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  Gender
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="city"
                  required
                />
                <label
                  htmlFor="city"
                  style={{ fontWeight: "700" }}
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  City
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="state"
                  required
                />
                <label
                  htmlFor="state"
                  style={{ fontWeight: "700" }}
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  State
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="country"
                  required
                />
                <label
                  htmlFor="country"
                  style={{ fontWeight: "700" }}
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  Country
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
