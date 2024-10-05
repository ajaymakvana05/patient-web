require("dotenv").config()
const express = require("express");
const cors = require("cors");
const cookie = require("cookie-parser");
const connect = require("./Backend/Config/db");
const PatientRoute = require("./Backend/Routes/Patient.Route");
const AdminRoute = require("./Backend/Routes/Admin.Route");
const DoctorRoute = require("./Backend/Routes/Doctor.Route");
const PrescriptionRoute = require("./Backend/Routes/Prescription.Route");
const AppointmentRoute = require("./Backend/Routes/Appointment.Route");
const path = require('path')


const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// const __dirname = path.resolve();

app.use(cors({
  origin: "https://patient-web.onrender.com", 
  credentials: true,
}));
app.use(cookie())

app.use("/patient", PatientRoute)
app.use("/admin", AdminRoute)
app.use("/doctor", DoctorRoute)
app.use("/Appointment", AppointmentRoute)
app.use("/prescription", PrescriptionRoute)

app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Catch-all to serve index.html for any request
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
});
app.listen(process.env.PORT, () => {
  console.log(`server connected ${process.env.PORT}`);
  connect()
})