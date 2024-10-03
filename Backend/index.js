require("dotenv").config()
const express=require("express");
const cors = require("cors");
const cookie=require("cookie-parser");
const connect = require("./Config/db");
const PatientRoute = require("./Routes/Patient.Route");
const AdminRoute = require("./Routes/Admin.Route");
const DoctorRoute = require("./Routes/Doctor.Route");
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true, 
}));
app.use(cookie())

app.use("/patient",PatientRoute)
app.use("/admin",AdminRoute)
app.use("/doctor",DoctorRoute)

app.listen(process.env.PORT,()=>{
    console.log(`server connected ${process.env.PORT}`);
    connect()
})