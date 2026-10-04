const {Worker}=require("bullmq");
const sendmail = require("../services/email_service");
require("dotenv").config();
const worker = new Worker(
    "emailqueue",
    async (job) => {
        console.log("Processing job:", job.name);

        await sendmail(
            job.data.email,
            "welcome to our website",
            job.data.message
        );

        console.log("successfull");
    },
    {
        connection: {
            host: "localhost",
            port: 6379
        }
    }
);

worker.on("failed", (job, err) => {
    console.log("Job failed:", job.id);
    console.log("Error:", err.message);
});