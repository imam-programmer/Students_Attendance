function authorize(req,res,next){
if(req.headers.authorization!="1234567"){
    return res.status(401).json({
        success:false,
        message:"U are not authorize"
    })
}
next()
}

module.exports=authorize