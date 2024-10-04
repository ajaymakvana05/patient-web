const mongoose=require("mongoose")
const PatientSchema=new mongoose.Schema({
    firstname:{type:String ,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    phonenumber:{type:String,required:true},
    age:{type:Number,required:true},
    height:{type:Number,required:true},
    weight:{type:Number,required:true},
    BloodGroup:{type:String,required:true},
    dateofbirth:{type:Date,required:true},
    country:{type:String,required:true},
    state:{type:String,required:true},
    city:{type:String,required:true},
    gender:{
        type:String,
        enum:['male','female','other'],
    },
    address:{type:String,required:true},
    password:{type:String,require:true},
    confirmpassword:{type:String,require:true},
    AppointmentID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
      }],  
},{timestamps:true})

const PatientModel=mongoose.model("Patient",PatientSchema)
module.exports=PatientModel