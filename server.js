const express=require("express");
const { client, connectredis } = require("./redis/redis");
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
const userdata=require("./routes/userdata");
connectredis();
app.use("/user",users);
app.use("/userdata",userdata);


app.listen(PORT,()=>{
    console.log("server started");
})