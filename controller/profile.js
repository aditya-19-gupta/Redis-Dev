const data=require("../models/db");
async function profile(req,res){
    try{
        console.log("profile");
        if(!req.session.userId){
            return res.status(401).json({status:"no session is there"});
        }
        const user=await data.findById(req.session.userId);

        if(!user){
            return res.status(401).json({status:"no data is there"});
        }

        return res.status(200).json({
            username:user.username,
            role:user.role
        });
    }
    catch(err){
        return res.status(401).json({status:"error!!!",error:err.message});
    }
}
module.exports=profile;