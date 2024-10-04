import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSection from "./Components/MainSection";
import RegistrationForm from "./Components/RegistrationForm";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import GetOTP from "./Components/GetOTP";
import AdminRegistration from "./pages/admin/adminRegistration";
<<<<<<< HEAD
import ProfileDashboard from "./pages/admin/ProfileDashboard";
import Profile from "./Components/Profile";
=======
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> 2ba2bf4ca6e173af71fe88826d66b92e63590a46

const App = () => {
  return (
    <Router>
      <div className="main-layout">
      <ToastContainer 
          position="top-right" // or "bottom-right" for bottom placement
          autoClose={2000}     // Auto close after 3 seconds
          hideProgressBar={false} // Show progress bar (optional)
          newestOnTop={true} // Newest notifications on top
          closeOnClick // Close on click
          pauseOnHover // Pause on hover
          draggable // Allow dragging the notification
        />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgotPassword />} />
          <Route path="/getotp" element={<GetOTP />} />
          <Route path="/adminregistration" element={<AdminRegistration />} />

          <Route path="/profiledashboard" element={<ProfileDashboard />} />

          <Route path="/profiledashboard/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
