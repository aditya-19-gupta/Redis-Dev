const queue=require("../queue/email");

async function addjob(){
    await queue.add("send mail",{
        email:"1nt24is013.aditya@nmit.ac.in",
        message:"welcome our website"
    },
    {
        attempts:3,
        backoff:{
            type:"fixed",
            delay:5000
        }
    }
);
    console.log("job added");
}
addjob();