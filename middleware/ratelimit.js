const {client}=require("../redis/redis");
async function ratelimit(req,res,next){
    try{
        const key=`rate:${req.ip}`;
        const count=await client.incr(key);

        if(count===1){
            await client.expire(key,60)
        }

        if(count>5){
            return res.status(429).json({message:"Too many attempts"});
        }

        next();
    }
    catch(err){
        return res.status(401).json({message:"Error!!!"});
    }
}
module.exports=ratelimit;