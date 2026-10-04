const {Queue}=require("bullmq");

const emailqueue=new Queue("emailqueue",{
    connection:{
        host:"localhost",
        port:6379
    }
});

module.exports=emailqueue;