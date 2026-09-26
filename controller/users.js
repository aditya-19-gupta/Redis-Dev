const data = require("../models/db");
const { client } = require("../redis/redis");
async function getdata(req,res){
   try{
        const cachedata=await client.get("data");
        if(cachedata){
            console.log("cache hit");
            return res.status(200).json(JSON.parse(cachedata));
        }
        console.log("cache missed");

        const userdata=await data.find();

        await client.setEx(
            "data",
            60,
            JSON.stringify(userdata)
        );

        res.json({userdata,status:"data saved in redis"});
   }
   catch(err){
    res.status(500).json({
            error: err.message
        });
   }

}
module.exports=getdata;