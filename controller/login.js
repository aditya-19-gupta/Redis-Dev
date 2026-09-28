const data=require("../models/db");
const bcrypt=require("bcryptjs");
async function login(req,res){
    try{
        const body=req.body;
    
        const user=await data.findOne({
            username:body.username

        });

        if(!user){
            return res.status(401).json({status:"no data found"});
        }

        let ismatch=await bcrypt.compare(body.password,user.password);

        if(!ismatch){
            return res.status(401).json({status:"password mismatch"});
        }

        req.session.userId=user._id;
        req.session.role=user.role;

        return res.status(200).json({
            message: "Login successful"
        });
    }
    catch(err){
        return res.status(401).json({status:"error occured",error: err.message});
    }
}
module.exports=login;