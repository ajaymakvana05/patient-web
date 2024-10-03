const{Router}=require("express")
const { login, resetpassword, DoctorProfile, DoctorUpdate } = require("../Controllers/Doctor.Controller")
const { DoctorAuth } = require("../Middlewares/auth")
const DoctorRoute=Router()

DoctorRoute.post("/login",login)

//reset password , change password
DoctorRoute.patch("/resetpassword",DoctorAuth,resetpassword)


// doctor profile
DoctorRoute.get("/profile",DoctorAuth,DoctorProfile)
DoctorRoute.patch("/update/:id",DoctorAuth,DoctorUpdate)

module.exports=DoctorRoute