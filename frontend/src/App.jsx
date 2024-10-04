import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSection from "./Components/MainSection";
import RegistrationForm from "./Components/RegistrationForm";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import GetOTP from "./Components/GetOTP";
import AdminRegistration from "./pages/admin/adminRegistration";
import ProfileDashboard from "./pages/admin/ProfileDashboard";
import Profile from "./Components/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChangePassword from "./Components/ChangePassword";
import EditProfileForm from "./Components/EditProfileForm";
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import DoctorDashboard from "./pages/admin/DoctorDashboard";
import PatientDashboard from "./pages/admin/PatientDashboard";
import BillingDashboard from "./pages/admin/BillingDashboard";
import ReportingDashboard from "./pages/admin/ReportingDashboard";
import 'react-toastify/dist/ReactToastify.css';
// import ChangePassword from "./Components/ChangePassword";

const App = () => {
  return (
    <Router>
      <div className="main-layout">
        <ToastContainer
          position="top-right" // or "bottom-right" for bottom placement
          autoClose={1000} // Auto close after 3 seconds
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
          <Route path="/changepassword" element={<ChangePassword />} />

          <Route path="/profiledashboard" element={<ProfileDashboard />}>
            <Route index path="profile" element={<Profile />} />
            <Route path="changepassword" element={<ChangePassword />} />
            <Route path="editprofileform" element={<EditProfileForm />} />
            <Route path="termsandconditions" element={<TermsAndConditions />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
          </Route>

          <Route path="/doctordashboard" element={<DoctorDashboard />} />
          <Route path="/patientdashboard" element={<PatientDashboard />} />
          <Route path="/billingdashboard" element={<BillingDashboard />} />
          <Route path="/reportingdashboard" element={<ReportingDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
