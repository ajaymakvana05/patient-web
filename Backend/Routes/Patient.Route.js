const{Router}=require("express")
const { signup, login, resetpassword, PatientProfile, PatientUpdate } = require("../Controllers/Patient.Controller")
const { Auth } = require("../Middlewares/auth")
const PatientRoute=Router()

PatientRoute.post("/signup",signup)
PatientRoute.post("/login",login)
PatientRoute.patch("/resetpassword",Auth,resetpassword)


// patient profile
PatientRoute.get("/profile",Auth,PatientProfile)
PatientRoute.patch("/update/:id",Auth,PatientUpdate)

module.exports=PatientRoute