import React, { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const SearchBarWithDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  const options = ["All", "Doctors", "Patients", "Billing", "Reports"];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-full shadow-md max-w-[315px] w-full mr-2 relative">
      <FaSearch className="ml-4 text-gray-400 fs-[24px]" />

      <input
        type="text"
        placeholder="Quick Search"
        className="bg-gray-100 px-4 py-2 w-full outline-none text-gray-600 placeholder-gray-400"
      />

      <div className="border-l border-gray-300 h-6 mx-4"></div>

      <div
        className="flex items-center space-x-2 mr-4 text-gray-600 cursor-pointer relative"
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        <FaChevronDown
          className={`text-gray-400 transform ${
            dropdownOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-200`}
        />

        {dropdownOpen && (
          <div className="absolute top-12 right-0 w-32 bg-white rounded-lg shadow-lg z-10">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionSelect(option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBarWithDropdown;
