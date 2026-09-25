const {createClient}=require("redis");
const client=createClient({
    url:"redis://localhost:6379"
});

client.on("error",(err)=>{
    console.log("reddis error",err);
})
async function connectredis(){
    await client.connect();
    console.log("redis connected");
}
module.exports={client,connectredis};