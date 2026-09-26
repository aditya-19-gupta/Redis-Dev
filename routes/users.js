const express=require("express");
const router=express.Router();
const getdata = require("../controller/users");

router.get("/",getdata);
module.exports=router;