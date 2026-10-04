require("dotenv").config()
const sendmail=require("./services/email_service");


async function test(){
    try{
        await sendmail(
            "1nt24is013.aditya@nmit.ac.in",
            "test mail",
            "this is the test mail ffor bullmq"
        );

        console.log("successful");
    }
    catch(err){
        console.log("error");
    }
}
test();