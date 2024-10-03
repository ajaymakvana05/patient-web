const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config();
const AdmintModel = require("../Models/Admin.Schema")
const HospitalModel = require("../Models/Hospital.Schema")
const DoctorModel = require("../Models/Doctor.schema")

const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, phonenumber, country, state, city, password, confirmpassword } = req.body;

        // Check if the user already exists
        const existingUser = await AdmintModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        // Check if passwords match
        if (password !== confirmpassword) {
            return res.status(400).json({ msg: "Passwords do not match" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Use 10 as the salt rounds for better security

        // Create a new user
        const newUser = new AdmintModel({
            firstname,
            lastname,
            email,
            phonenumber,
            country,
            state,
            city,
            password: hashedPassword,
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with success message
        res.status(200).json({ msg: "User registered successfully", newUser });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        let data = await AdmintModel.findOne({ email: email });
        if (!data) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, data.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Password incorrect" });
        }

        let Admintoken = jwt.sign({ id: data._id }, process.env.AdminSecrate, { expiresIn: '1h' });

        res.cookie("Admintoken", Admintoken).cookie("id", data._id);

        res.status(200).json({ message: "Successfully Login", data, Admintoken });

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

            const isMatch = await bcrypt.compare(oldpassword, user.password);

            if (!isMatch) {
                return res.status(400).json({ msg: "Old password is incorrect" });
            }
            else {

                if (newpassword !== confirmpassword) {
                    return res.status(400).json({ msg: "New password and confirm password do not match" });
                }
                else {

                    const hashedNewPassword = await bcrypt.hash(newpassword, 10);

                    await AdmintModel.findByIdAndUpdate(user._id, { password: hashedNewPassword });

                    res.status(200).json({ msg: "Password reset successfully" });
                }
            }
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


const AdminProfile = async (req, res) => {
    try {
        let admindata = await AdmintModel.findById({ _id: req.body.AdminID })
        res.json(admindata)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const AdminUpdate = async (req, res) => {
    try {
        let { id } = req.params
        let data = await AdmintModel.findByIdAndUpdate(id, req.body, { new: true })
        res.json({ message: "update succesfully", data })

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

}

const addHospital = async (req, res) => {
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

module.exports = { signup, login, resetpassword, addHospital, AddDoctor, AdminProfile, AdminUpdate }