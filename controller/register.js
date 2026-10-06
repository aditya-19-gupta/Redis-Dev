const queue=require("../queue/email");
const data=require("../models/db");
async function setdata(req,res){
    try{
        const{username,password,role,email}=req.body;
        const newuser=new data({username,password,role,email});
        
        await queue.add(
            "send mail",
            {
                email:email,
                message: "Welcome to our website"
            },
            {
                priority:1
            },
            {
                attempts: 3,
                backoff: {
                    type: "fixed",
                    delay: 5000
                }
            }
        );


        await newuser.save();
        return res.json({status:"data saved"});
    }
    catch(err){
        return res.json({status:"error !!"});
    }
}
module.exports=setdata;