const mongoose=require("mongoose")
function mongodbConnection(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("database is connected"))
}
module.exports=mongodbConnection