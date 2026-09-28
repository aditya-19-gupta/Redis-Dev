
const session=require("express-session");
const store=require("../redisStore/redisstore");
require("dotenv").config();

const sessionMiddleware=
    session({
        store:store,
        secret:process.env.Session_secret,
        resave:false,
        saveUninitialized:false,
        cookie:{
            httpOnly:true,
            maxAge:60*60*1000
        } 
    });

module.exports=sessionMiddleware;