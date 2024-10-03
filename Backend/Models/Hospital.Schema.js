const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema(
  {
   HospitalName : { type: String , required: true },
   HospitalAddress : { type: String , required: true},
   country: { type: String, required: true },
   state: { type: String, required: true },
   city: { type: String, required: true },
   ZipCode: { type: Number, required: true },
  },
  { timestamps: true }
);

let HospitalModel = mongoose.model("Hospital", HospitalSchema);

module.exports = HospitalModel;