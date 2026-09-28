const express=require("express");
const setdata = require("../controller/register");
const router=express.Router();

router.post("/",setdata)
module.exports=router;