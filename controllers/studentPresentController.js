const Attendance = require("../model/studentinfoModel");
const StudentAttendence = async (req, res) => {
  const { name, email, Attandence, homework } = req.body;
//   this is for empty values============================================
  const errors = {};
  if (!name || !email) {
    if (!name) errors.name = "name is required";
    if (!email) errors.email = "email is required";
    return res.status(400).json({
      success: false,
      message: errors,
    });
  }
//   =================================================================

// this is for email formate validation======================================================
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let emailRegex = regex.test(email);
  if (!emailRegex) {
    return res.status(400).json({
      success: false,
      message: "please give a valid email",
    });
  }
// ====================================================================================


  const data = new Attendance({
    name: name,
    email: email,
    Attandence: Attandence,
    homeword: homework,
  }).save();

  res.status(200).json({
    success: true,
    message: await data,
  });
};
module.exports = StudentAttendence;
