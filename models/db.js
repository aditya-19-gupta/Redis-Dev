const mongoose = require("mongoose");
const dbscheme=new mongoose.Schema({
    username:{
        type:String,
    },
    lastname:{
        type:String,
    }
})
module.exports=mongoose.model("user",dbscheme);