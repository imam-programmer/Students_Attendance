require("dotenv").config()
const express=require("express");
const StudentAttendence=require("./controllers/studentPresentController")
const app=express()
app.use(express.json())
const port=process.env.PORT
const Attendance=require("./model/studentinfoModel")
app.post("/students",StudentAttendence)
app.post("/updata/:id",async (req,res)=>{
const {id}=req.params
const updateData= await Attendance.findByIdAndUpdate({_id:id},req.body,{new:true})
res.status(200).json({
    success:true,
    message:updateData
})
})

app.delete("/delete/:id",async (req,res)=>{
const {id}=req.params
 await Attendance.findByIdAndDelete(id)
res.status(200).json({
    success:true,
    message:"Data deleted"
})
})
app.listen(port,()=>{
    console.log("server is running")
})