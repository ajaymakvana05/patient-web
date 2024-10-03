import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RightSideContent from "./RightSideContent";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
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

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
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
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:8090/admin/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: formData.firstName,
            lastname: formData.lastName,
            email: formData.email,
            phonenumber: formData.phone,
            country: formData.country,
            state: formData.state,
            city: formData.city,
            password: formData.password,
            confirmpassword: formData.confirmPassword,
          }),
        });

        const result = await response.json();
        if (response.ok) {
          navigate("/login");
        } else {
          setErrors({ apiError: result.msg || "Something went wrong!" });
        }
      } catch (error) {
        setErrors({ apiError: "Network error occurred, please try again." });
      }
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Registration</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${errors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mt-4">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="relative">
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${errors.country ? "border-red-500" : "border-gray-300"
                  } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                placeholder="Country"
              />
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${errors.state ? "border-red-500" : "border-gray-300"
                  } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                placeholder="State"
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state}</p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${errors.city ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
              placeholder="City"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div>



          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm text-gray-600">
              I accept the terms and conditions
            </label>
          </div>
          {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>

          {errors.apiError && (
            <p className="mt-4 text-red-500 text-sm text-center">{errors.apiError}</p>
          )}

          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </form>
      </div>
      <RightSideContent />
    </div>
  );
};

export default Register;
