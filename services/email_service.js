const nodemailer=require("nodemailer");
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
require("dotenv").config();
const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
});

async function sendmail(to,subject,message){
    await transport.sendMail({
        from:process.env.EMAIL_USER,
        to:to,
        subject:subject,
        message:message
    })
}

module.exports=sendmail;