import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSection from "./Components/MainSection";
import RegistrationForm from "./Components/RegistrationForm";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import GetOTP from "./Components/GetOTP";
import AdminRegistration from "./pages/admin/adminRegistration";

const App = () => {
  return (
    <Router>
      <div className="main-layout">
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgotPassword />} />
          <Route path="/getotp" element={<GetOTP />} />
          <Route path="/adminregistration" element={<AdminRegistration />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
