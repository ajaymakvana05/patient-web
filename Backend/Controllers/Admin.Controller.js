const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const AdmintModel = require("../Models/Admin.Schema")
const HospitalModel = require("../Models/Hospital.Schema")
const DoctorModel = require("../Models/Doctor.schema")

const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, phonenumber, country, state, city,  password, confirmpassword, } = req.body
        const user = await AdmintModel.findOne({ email: email })

        if (password !== confirmpassword) {
            return res.status(400).json({ msg: "Passwords do not match" });
        }

        const hashedPassword = await bcrypt.hash(password, 5);

        const newUser = new AdmintModel({
            firstname,
            lastname,
            email,
            phonenumber,
            country,
            state,
            city,
            password: hashedPassword
        });

        await newUser.save();

        res.status(200).json({ msg: "User registered successfully", newUser });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let data = await AdmintModel.findOne({ email: email });
        
        if (data) {
            const isMatch = await bcrypt.compare(password, data.password);
            if (isMatch) {
                let Admintoken = jwt.sign({ id: data._id }, process.env.AdminSecrate, { expiresIn: '1h' });
                res.cookie("Admintoken", Admintoken).cookie("id", data._id);
                res.status(200).json({ message: "Successfully Login", data, Admintoken });
            } else {
                res.status(400).json({ message: "Password incorrect" });
            }
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const resetpassword = async (req, res) => {
    try {
        const { oldpassword, newpassword, confirmpassword } = req.body;
        const user = await AdmintModel.findOne({ _id: req.body.AdminID });

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        else {

            // Compare oldpassword with the stored hashed password
            const isMatch = await bcrypt.compare(oldpassword, user.password);

            if (!isMatch) {
                return res.status(400).json({ msg: "Old password is incorrect" });
            }
            else {

                // Check if newpassword matches confirmpassword
                if (newpassword !== confirmpassword) {
                    return res.status(400).json({ msg: "New password and confirm password do not match" });
                }
                else {

                    // Hash the new password before saving it
                    const hashedNewPassword = await bcrypt.hash(newpassword, 10);

                    // Update the password in the database
                    await AdmintModel.findByIdAndUpdate(user._id, { password: hashedNewPassword });

                    res.status(200).json({ msg: "Password reset successfully" });
                }
            }
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const addHospital=async(req,res)=>{
    try {
        let admin = await AdmintModel.findById({ _id: req.body.AdminID })
        let data = await HospitalModel.create(req.body)
        admin.hospital.push(data._id)
        admin.save()
        res.json(data)
    } catch (error) {
        res.json({ msg: error.message })
    }
}



const AddDoctor = async (req, res) => {
    try {
        let doctorImage = req.files['DoctorImage'] ? req.files['DoctorImage'][0] : null;
        let doctorSignature = req.files['DoctorSignature'] ? req.files['DoctorSignature'][0] : null;

        let doctor = new DoctorModel(req.body);

        if (doctorImage) {
            doctor.DoctorImage = {
                url: doctorImage.path,
                filename: doctorImage.filename,
            };
        }

        if (doctorSignature) {
            doctor.DoctorSignature = {
                url: doctorSignature.path,
                filename: doctorSignature.filename,
            };
        }

        await doctor.save();
        res.status(200).json({ msg: "Doctor created successfully", doctor });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

module.exports = { signup, login, resetpassword ,addHospital,AddDoctor}