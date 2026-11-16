const mongoose=require("mongoose");
const {Schema}=mongoose
const StudentSchema= new Schema({
    name:{
        type:String,
        required:true
    },email:{
        type:String,
        unique:true,
        required:true
    },Attandence:{
        type:String,
        enum:["present","absent"],
        default:"absent"
    },homework:{
        type:Boolean,
        enum:[true,false],
        default:false
    }
})
module.exports=mongoose.model("Attendance",StudentSchema)