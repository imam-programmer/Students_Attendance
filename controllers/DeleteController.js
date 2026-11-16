const Attendance=require("../model/studentinfoModel")
const deleteData=async (req,res)=>{
const {id}=req.params
 await Attendance.findByIdAndDelete(id)
res.status(200).json({
    success:true,
    message:"Data deleted"
})
}
module.exports=deleteData