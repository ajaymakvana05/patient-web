const{Router}=require("express")
const { signup, login, resetpassword } = require("../Controllers/Patient.Controller")
const { Auth } = require("../Middlewares/auth")
const PatientRoute=Router()

PatientRoute.post("/signup",signup)
PatientRoute.post("/login",login)
PatientRoute.patch("/resetpassword",Auth,resetpassword)

module.exports=PatientRoute