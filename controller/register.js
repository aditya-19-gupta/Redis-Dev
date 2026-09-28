const data=require("../models/db");
async function setdata(req,res){
    try{
        const{username,password,role}=req.body;
        const newuser=new data({username,password,role});
        
        await newuser.save();
        return res.json({status:"data saved"});
    }
    catch(err){
        return res.json({status:"error !!"});
    }
}
module.exports=setdata;