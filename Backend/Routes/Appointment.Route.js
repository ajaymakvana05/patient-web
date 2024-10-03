const{Router}=require("express")
const { Auth, AuthPatientOrDoctor, DoctorAuth } = require("../Middlewares/auth")
const { AllAppointment, AddAppointment, DeleteAppointment, UpdateAppointment, getPatientAppointmentHistory, getDoctorAppointmentHistory, cancelAppointment, getDoctorUpcomingAppointments } = require("../Controllers/Appointment.Controller")
const AppointmentRoute=Router()

AppointmentRoute.get("/AllAppointment",Auth,AllAppointment)
AppointmentRoute.post("/AddAppointment",Auth,AddAppointment)
AppointmentRoute.patch("/UpdateAppointment/:id",Auth,UpdateAppointment)
AppointmentRoute.delete("/DeleteAppointment/:id",Auth,DeleteAppointment)

// Fetch appointment history for a patient
AppointmentRoute.get("/PaAppointmentHistory/:PatientID",Auth,getPatientAppointmentHistory)

// Fetch appointment history for a doctor
AppointmentRoute.get("/DoAppointmentHistory/:DoctorID",DoctorAuth,getDoctorAppointmentHistory)
AppointmentRoute.get("/UpcomingAppointment/:DoctorID",DoctorAuth,getDoctorUpcomingAppointments)

// cancelcAppointment
AppointmentRoute.patch("/cancelAppointment/:id",Auth,cancelAppointment)

module.exports=AppointmentRoute