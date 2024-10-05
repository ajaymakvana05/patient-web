// src/App.js
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
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute"; 

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="main-layout">
          <ToastContainer
            position="top-right" 
            autoClose={1000}
            hideProgressBar={false} 
            newestOnTop={true} 
            closeOnClick 
            pauseOnHover 
            draggable 
          />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgotPassword />} />
            <Route path="/getotp" element={<GetOTP />} />
            <Route path="/adminregistration" element={<AdminRegistration />} />
            <Route path="/changepassword" element={<ChangePassword />} />

            {/* Secure Profile Dashboard */}
            <Route path="/profiledashboard" element={<ProtectedRoute><ProfileDashboard /></ProtectedRoute>}>
              <Route index path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="changepassword" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
              <Route path="editprofileform" element={<ProtectedRoute><EditProfileForm /></ProtectedRoute>} />
              <Route path="termsandconditions" element={<ProtectedRoute><TermsAndConditions /></ProtectedRoute>} />
              <Route path="privacypolicy" element={<ProtectedRoute><PrivacyPolicy /></ProtectedRoute>} />
            </Route>

            {/* Secure Dashboard Routes */}
            <Route path="/doctordashboard" element={<ProtectedRoute><DoctorDashboard /></ProtectedRoute>} />
            <Route path="/patientdashboard" element={<ProtectedRoute><PatientDashboard /></ProtectedRoute>} />
            <Route path="/billingdashboard" element={<ProtectedRoute><BillingDashboard /></ProtectedRoute>} />
            <Route path="/reportingdashboard" element={<ProtectedRoute><ReportingDashboard /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
