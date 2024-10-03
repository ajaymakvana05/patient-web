const{Router}=require("express")
const { login, resetpassword } = require("../Controllers/Doctor.Controller")
const { DoctorAuth } = require("../Middlewares/auth")
const DoctorRoute=Router()

DoctorRoute.post("/login",login)

//reset password , change password
DoctorRoute.patch("/resetpassword",DoctorAuth,resetpassword)

module.exports=DoctorRoute