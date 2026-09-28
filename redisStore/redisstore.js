const session=require("express-session");
const { RedisStore } = require("connect-redis");
const { client, connectredis } = require("../redis/redis");

const store=new RedisStore({
    client:client,
    prefix:"session:"
})
module.exports=store;