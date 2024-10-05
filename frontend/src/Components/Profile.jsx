import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Edit from "../assets/images/edit.svg";
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [profileData, setProfileData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    country: "",
    state: "",
    city: "",
    hospitalName: "", 
    gender: "",
  });

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch("https://patient-web-1.onrender.com/admin/profile", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch admin data");
        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.patch(
        `http://localhost:8090/admin/update`,
        profileData,
        { withCredentials: true }
      );
      if (response.data) {
        setSuccessMessage("Profile updated successfully!");
        toast.success("Profile updated successfully!");
        setIsEditable(false);
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error updating profile", error);
      setErrorMessage(
        "Failed to update profile: " +
        (error.response ? error.response.data.msg : error.message)
      );
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="flex flex-col h-10">
      <div className="flex">
        <div className="p-6">
          <div className="flex justify-between mb-6">
            <h2 className="text-xl font-bold">Profile</h2>
            <button
              className="bg-blue text-white px-4 py-2 rounded-lg"
              onClick={() => setIsEditable(!isEditable)}
            >
              <img src={Edit} alt="edit icon" className="inline-block" />
              {isEditable ? "Cancel Edit" : "Edit Profile"}
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4">
              {/* First Name */}
              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="firstname"
                  value={profileData.firstname || ""}
                  onChange={handleChange}
                  readOnly={!isEditable}
                  required
                />
                <label
                  htmlFor="firstname"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"

                  style={{ fontWeight: "700" }}
                >
                  First Name
                </label>
              </div>

              {/* Last Name */}
              <div className="relative">
                <input
                  className="peer fs-[16px] w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="lastname"
                  value={profileData.lastname || ""}
                  onChange={handleChange}
                  readOnly={!isEditable}
                  required
                />
                <label
                  htmlFor="lastname"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                  style={{ fontWeight: "700" }}
                >
                  Last Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="email"
                  id="email"
                  value={profileData.email || ""}
                  onChange={handleChange}
                  readOnly={!isEditable}
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                  style={{ fontWeight: "700" }}
                >
                  Email Address
                </label>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="number"
                  id="phonenumber"
                  value={profileData.phonenumber || ""}
                  onChange={handleChange}
                  readOnly={!isEditable}
                  required
                />
                <label
                  htmlFor="phone"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                  style={{ fontWeight: "700" }}
                >
                  Phone Number
                </label>
              </div>

              {/* Hospital Name */}
              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="hospitalName"
                  value={profileData.hospitalName || ""}
                  onChange={handleChange}
                  readOnly={!isEditable}
                  required
                />
                <label
                  htmlFor="hospitalName"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                  style={{ fontWeight: "700" }}
                >
                  Hospital Name
                </label>
              </div>

              {/* Gender */}
              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="gender"
                  value={profileData.gender || ""}
                  onChange={handleChange}
                  readOnly={!isEditable}
                  required
                />
                <label
                  htmlFor="gender"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                  style={{ fontWeight: "700" }}
                >
                  Gender
                </label>
              </div>

              {/* City */}
              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="city"
                  value={profileData.city || ""}
                  onChange={handleChange}
                  readOnly={!isEditable}
                  required
                />
                <label
                  htmlFor="city"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                  style={{ fontWeight: "700" }}
                >
                  City
                </label>
              </div>

              {/* State */}
              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="state"
                  value={profileData.state || ""}
                  onChange={handleChange}
                  readOnly={!isEditable}
                  required
                />
                <label
                  htmlFor="state"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                  style={{ fontWeight: "700" }}
                >
                  State
                </label>
              </div>

              {/* Country */}
              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="country"
                  value={profileData.country || ""}
                  onChange={handleChange}
                  readOnly={!isEditable}
                  required
                />
                <label
                  htmlFor="country"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                  style={{ fontWeight: "700" }}
                >
                  Country
                </label>
              </div>
            </div>
            {isEditable && (
              <button
                type="submit"
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Save Changes
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
