const express=require("express");
const setdata = require("../controller/userdata");
const router=express.Router();

router.post("/",setdata)
module.exports=router;