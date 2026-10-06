const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");
const dbscheme=new mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
     role: {
        type: String,
        default: "user",
    },
    email:{
        type:String,
        required:true
    }

})
dbscheme.pre("save",async function(){
    const person=this;
    if(!person.isModified("password")){
        return 
    }
    const salt=await bcrypt.genSalt(10);
    const hashedpassword=await bcrypt.hash(person.password,salt);
    person.password=hashedpassword;

})
module.exports=mongoose.model("user",dbscheme);