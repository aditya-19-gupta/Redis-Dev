const express=require("express");
const { connectredis } = require("./redis/redis");
const app=express();
const mongoose = require("mongoose");
const user = require("../redis_L3/models/db");
async function connect(db){
    return mongoose.connect(db);
}
connect("mongodb://127.0.0.1:27017/redis")
.then(() => console.log("Connection established"));
require("dotenv").config();

const PORT=process.env.PORT;

app.use(express.json());

const users=require("./routes/users");
const register=require("./routes/register");
const login = require("./routes/login");
const sessionMiddleware = require("./middleware/session");
const profile = require("./routes/profile");
const logout = require("./routes/logout");
const ratelimit=require("./middleware/ratelimit");
connectredis();
app.use("/user",users);
app.use("/register",register);
app.use("/login",sessionMiddleware,login);
app.use("/profile",sessionMiddleware,ratelimit,profile);
app.use("/logout",sessionMiddleware,logout);




app.listen(PORT,()=>{
    console.log("server started");
})