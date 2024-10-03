const jwt = require('jsonwebtoken');

const Auth = (req, res, next) => {
    let { token } = req.cookies;
      
    if (token) {
        try {
            let decode = jwt.verify(token, process.env.jwtSecrate);
            req.body.PatientID = decode.id;
            next();
        } catch (error) {
            return res.status(401).json("Invalid token signature");
        }
    } else {
        res.status(403).json("You are not authorized");
    }
};

const AdminAuth = (req, res, next) => {
    let { Admintoken } = req.cookies;
      
    if (Admintoken) {
            let decode = jwt.verify(Admintoken, process.env.AdminSecrate);
            req.body.AdminID = decode.id;
            next();
    } else {
        res.status(403).json("You are not authorized");
    }
};
const DoctorAuth = (req, res, next) => {
    let { Doctortoken } = req.cookies;
      
    if (Doctortoken) {
            let decode = jwt.verify(Doctortoken, process.env.DoctorSecrate);
            req.body.DoctorID = decode.id;
            next();
    } else {
        res.status(403).json("You are not authorized");
    }
};

const AuthDoctorOrAdmin = (req, res, next) => {
    let { Doctortoken, Admintoken } = req.cookies;

    if (Doctortoken) {
        try {
            let decode = jwt.verify(Doctortoken, process.env.DoctorSecrate);
            req.body.DoctorID = decode.id;  // Set DoctorID to request body
            next();  // Proceed to next middleware or route handler
        } catch (err) {
            return res.status(403).json("Invalid doctor token");
        }
    } else if (Admintoken) {
        try {
            let decode = jwt.verify(Admintoken, process.env.AdminSecrate);
            req.body.AdminID = decode.id;  // Set AdminID to request body
            next();  // Proceed to next middleware or route handler
        } catch (err) {
            return res.status(403).json("Invalid admin token");
        }
    } else {
        return res.status(403).json("You are not authorized");
    }
};

const AuthPatientOrAdmin = (req, res, next) => {
    let { token, Admintoken } = req.cookies;

    if (token) {  // Check for Patient token
        try {
            let decode = jwt.verify(token, process.env.jwtSecrate);
            req.body.PatientID = decode.id;  // Attach PatientID to request body
            next();  // Proceed to the next middleware or route handler
        } catch (error) {
            return res.status(401).json("Invalid Patient token signature");
        }
    } else if (Admintoken) {  // Check for Admin token
        try {
            let decode = jwt.verify(Admintoken, process.env.AdminSecrate);
            req.body.AdminID = decode.id;  // Attach AdminID to request body
            next();  // Proceed to the next middleware or route handler
        } catch (error) {
            return res.status(401).json("Invalid Admin token signature");
        }
    } else {
        res.status(403).json("You are not authorized");
    }
};

module.exports = { Auth, AdminAuth,DoctorAuth ,AuthDoctorOrAdmin,AuthPatientOrAdmin};
