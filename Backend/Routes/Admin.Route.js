const { Router } = require("express")
const { signup, login, resetpassword, addHospital, AddDoctor, AdminProfile, AdminUpdate } = require("../Controllers/Admin.Controller")
const { AdminAuth, AuthDoctorOrAdmin } = require("../Middlewares/auth")
const AdminRoute = Router()

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// admin login , signup
AdminRoute.post("/signup", signup)
AdminRoute.post("/login", login)
AdminRoute.patch("/resetpassword", AdminAuth, resetpassword)

// admin profile
AdminRoute.get("/profile", AdminAuth, AdminProfile)
AdminRoute.patch("/update", AdminAuth, AdminUpdate)

// admin add hospital
AdminRoute.post("/addhospital", AdminAuth, addHospital)

// admin add doctor
AdminRoute.post("/adddoctor", AuthDoctorOrAdmin, upload.fields([
  { name: "DoctorImage", maxCount: 1 },
  { name: "DoctorSignature", maxCount: 1 },
]), AddDoctor)

module.exports = AdminRoute