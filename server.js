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


connectredis();
app.get("/test",async (req,res)=>{
    await client.set("name","Aditya");
    const name=await client.get("name");
    res.json({name});
})


app.listen(PORT,()=>{
    console.log("server started");
})