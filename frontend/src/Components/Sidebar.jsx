import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserMd,
  FaUsers,
  FaFileInvoiceDollar,
  FaChartLine,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "../assets/images/logo.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="p-4 text-black transition-colors duration-300"
        >
          <FaBars size={24} />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 max-w-[292px] h-full bg-white shadow-lg p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:shadow-none md:h-auto`}
      >
        <div>
          <div className="flex justify-between items-center mb-8">
            <div className="flex justify-center items-center">
              <img src={Logo} alt="Hospital Logo" className="w-45" />
            </div>
            <button
              onClick={toggleSidebar}
              className={`text-black transition-colors duration-300 ${isOpen ? "block md:hidden" : "hidden"
                }`}
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/profiledashboard"
                  className={({ isActive }) =>
                    `flex fs-[16px] items-center space-x-2 px-4 py-2 text-grey rounded-md transition-colors duration-300 ${isActive
                      ? "text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                    }`
                  }
                >
                  <FaTachometerAlt />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Dashboard
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/doctordashboard"
                  className={({ isActive }) =>
                    `flex fs-[16px] items-center space-x-2 px-4 py-2 text-grey rounded-md transition-colors duration-300 ${isActive
                      ? "text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                    }`
                  }
                >
                  <FaUserMd />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Doctor Management
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/patientdashboard"
                  className={({ isActive }) =>
                    `flex fs-[16px] items-center space-x-2 px-4 py-2 text-grey rounded-md transition-colors duration-300 ${isActive
                      ? "text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                    }`
                  }
                >
                  <FaUsers />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Patient Management
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/billingdashboard"
                  className={({ isActive }) =>
                    `flex fs-[16px] items-center space-x-2 px-4 py-2 text-grey rounded-md transition-colors duration-300 ${isActive
                      ? "text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                    }`
                  }
                >
                  <FaFileInvoiceDollar />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Billing And Payments
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reportingdashboard"
                  className={({ isActive }) =>
                    `flex fs-[16px] items-center space-x-2 px-4 py-2 text-grey rounded-md transition-colors duration-300 ${isActive
                      ? "text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                    }`
                  }
                >
                  <FaChartLine />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Reporting And Analytics
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="mt-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center bg-liteRed text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
