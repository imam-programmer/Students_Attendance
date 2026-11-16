require("dotenv").config()
const express=require("express");
const StudentAttendence=require("./controllers/studentPresentController")
const mongodbConnection=require("./config/mongodbConfiguration")
const authorize=require("./middleware/authorizeMiddleware")
const studentUpdate=require("./controllers/studentUpdateController")
const deleteData=require("./controllers/DeleteController")
const app=express()
app.use(express.json())
const port=process.env.PORT || 5000


mongodbConnection()

// this is for student attendence========================================
app.post("/students",StudentAttendence)

// this is for update student information=======================================
app.post("/update/:id",authorize,studentUpdate)


// =this is for student delete=======================================
app.delete("/delete/:id",authorize,deleteData)


app.listen(port,()=>{
    console.log("server is running")
})