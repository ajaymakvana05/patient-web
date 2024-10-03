const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const PatientModel = require("../Models/PatientSchema")

const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, phonenumber, age, height, weight, BloodGroup, dateofbirth, country, state, city, gender, address, password, confirmpassword, } = req.body
        const user = await PatientModel.findOne({ email: email })

        if (password === confirmpassword) {
            if (!user) {
                bcrypt.hash(password, 5, async (err, hash) => {
                    let obj = {
                        firstname,
                        lastname,
                        email,
                        phonenumber,
                        age,
                        height,
                        weight,
                        BloodGroup,
                        dateofbirth,
                        country,
                        state,
                        city,
                        gender,
                        address,
                        password: hash,
                        confirmpassword: hash,
                    }

                    let user = await PatientModel.create(obj)
                    res.status(200).json(user)
                })
            }
            else {
                res.status(400).json({ msg: "This email is already exists" })
            }
        }
        else {
            res.json({ msg: "Do not match password" })
        }
    } catch (error) {
        res.json({ msg: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let data = await PatientModel.findOne({ email: email });
        if (data) {
            bcrypt.compare(password, data.password, (err, result) => {
                if (result) {
                    let token = jwt.sign({ id: data._id }, process.env.jwtSecrate);
                    res.cookie("token", token).cookie("id", data._id);
                    res.status(200).json({ message: "Successfully Login", data, token });
                } else {
                    res.status(400).json({ message: "Password incorrect" });
                }
            });
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        res.json({ msg: error.message })
    }
};

const resetpassword = async (req, res) => {
    try {
        const { oldpassword, newpassword, confirmpassword } = req.body;
        const user = await PatientModel.findOne({ _id: req.body.PatientID });

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
                    await PatientModel.findByIdAndUpdate(user._id, { password: hashedNewPassword });

                    res.status(200).json({ msg: "Password reset successfully" });
                }
            }
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};



module.exports = { signup, login, resetpassword }