const { Router } = require("express")
const { DoctorAuth } = require("../Middlewares/auth")
const { allAppointment, SingleAppoiment, AddPriscription, getPrescription, getTodaysPrescriptions, getOldPrescriptions, searchPrescriptionsByPatientName, getPrescriptionsByDate, SinglePrescription } = require("../Controllers/Prescription.Controller")
const PrescriptionRoute = Router()

// all appointment and SingleAppoiment
PrescriptionRoute.get("/AllAppointment",DoctorAuth,allAppointment)
PrescriptionRoute.get("/SingleAppoiment/:id", DoctorAuth,SingleAppoiment)


//create Prescription
PrescriptionRoute.post("/CreatePrescription/:id",DoctorAuth,AddPriscription)

//get Prescription
PrescriptionRoute.get("/getCreatePrescription/:id",DoctorAuth,getPrescription)

// Get Today's Prescriptions (ignoring time)
PrescriptionRoute.get("/todayPrescription",DoctorAuth, getTodaysPrescriptions);


// Get Old Prescriptions (before today, ignoring time)
PrescriptionRoute.get("/oldPrescription",DoctorAuth, getOldPrescriptions);

//  search Prescriptions By PatientName
PrescriptionRoute.get("/searchprescriptions",DoctorAuth, searchPrescriptionsByPatientName);

// Get Prescriptions for a Specific Date
PrescriptionRoute.get("/searchingdate",DoctorAuth, getPrescriptionsByDate);

//single Prescription
PrescriptionRoute.get("/SinglePrescription/:id", DoctorAuth,SinglePrescription)


module.exports = PrescriptionRoute