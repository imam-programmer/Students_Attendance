const Attendance=require("../model/studentinfoModel")
const studentUpdate=async (req,res)=>{
const {id}=req.params
const updateData= await Attendance.findByIdAndUpdate({_id:id},req.body,{new:true})
res.status(200).json({
    success:true,
    message:updateData
})
}
module.exports=studentUpdate