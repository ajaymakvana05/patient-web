import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RightSideContent from "./RightSideContent";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    bloodGroup: "",
    dob: "",
    country: "",
    state: "",
    city: "",
    address: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (Number(formData.age) <= 0) {
      newErrors.age = "Age must be a positive number";
    }

    if (!formData.height.trim()) {
      newErrors.height = "Height is required";
    } else if (isNaN(formData.height) || Number(formData.height) <= 0) {
      newErrors.height = "Height must be a positive number";
    }

    if (!formData.weight.trim()) {
      newErrors.weight = "Weight is required";
    } else if (isNaN(formData.weight) || Number(formData.weight) <= 0) {
      newErrors.weight = "Weight must be a positive number";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.bloodGroup) {
      newErrors.bloodGroup = "Blood Group is required";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      navigate("/success");
    }
  };

  return (
    <div className="grid grid-cols-2 ">
      <div className=" p-6  bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Registration</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex gap-4 mb-4">
            <div className="relative w-1/2">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
            peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                First Name
              </label>
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="relative w-1/2">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
            peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Last Name
              </label>
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="relative w-1/2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
            peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Email Address
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="relative w-1/2">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
            peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Phone Number
              </label>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="relative w-1/3">
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.age ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
            peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Age
              </label>
              {errors.age && (
                <p className="text-red-500 text-sm mt-1">{errors.age}</p>
              )}
            </div>
            <div className="relative w-1/3">
              <input
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.height ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
            peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Height (cm)
              </label>
              {errors.height && (
                <p className="text-red-500 text-sm mt-1">{errors.height}</p>
              )}
            </div>
            <div className="relative w-1/3">
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.weight ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
            peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Weight (kg)
              </label>
              {errors.weight && (
                <p className="text-red-500 text-sm mt-1">{errors.weight}</p>
              )}
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="relative w-1/3">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.gender ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              >
                <option value="" disabled>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-pointer select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-focus:text-blue-600">
                Gender
              </label>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
              )}
            </div>
            <div className="relative w-1/3">
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.bloodGroup ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              >
                <option value="" disabled>
                  Blood Group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-pointer select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-focus:text-blue-600">
                Blood Group
              </label>
              {errors.bloodGroup && (
                <p className="text-red-500 text-sm mt-1">{errors.bloodGroup}</p>
              )}
            </div>

            <div className="relative w-1/3">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.dob ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              />
              <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-pointer select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-focus:text-blue-600">
                Date of Birth
              </label>
              {errors.dob && (
                <p className="text-red-500 text-sm mt-1">{errors.dob}</p>
              )}
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="relative w-1/2">
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.country ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
            peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Country
              </label>
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country}</p>
              )}
            </div>
            <div className="relative w-1/2">
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.state ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
            peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                State
              </label>
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state}</p>
              )}
            </div>
            <div className="relative w-1/2 mt-4">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
            peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                City
              </label>
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                errors.address ? "border-red-500" : "border-gray-300"
              } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
            />
            <label
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
          peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
          peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              Address
            </label>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          <div className="flex gap-4 mb-4">
            <div className="relative w-1/2">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
            peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Password
              </label>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="relative w-1/2">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 
            peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Confirm Password
              </label>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ${
                errors.terms ? "border-red-500" : ""
              }`}
            />
            <label className="ml-2 text-sm text-gray-600">
              I accept the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm mb-4">{errors.terms}</p>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
          >
            Register
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
      <RightSideContent />
    </div>
  );
};

export default Register;
