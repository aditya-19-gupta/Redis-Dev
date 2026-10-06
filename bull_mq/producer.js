// const queue=require("../queue/email");

// async function addjob(){
//     await queue.add("send mail",
//     {
//         attempts:3,
//         backoff:{
//             type:"fixed",
//             delay:5000
//         }
//     }
// );
//     console.log("job added");
// }
// addjob();