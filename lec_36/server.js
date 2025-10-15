// const express = require ("express");
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}))
// const {Queue} = require('bullmq');

// let codeQueue = new Queue("code-queue", {
//     connection: {
//         host: 'localhost',
//         port: 6379,
//     },
// });
// app.post("/api/submission",async function(req,res){
//     let {qId,code,language} = req.body
//     // task offload to message queue , so that a worker can do the task
//     let reuslt = await codeQueue.add("code-queue",{
//         qId,code,language
//     });
//     console.log();
//     // reuslt.then(job => console.log("Job added:", job.id));
//     res.json({
//         submissionId:Job.id
//     })
// },{
//     connection:{
//         host:'localhost',
//         port:6379,
//     }
// })
// let worker = new Worker("code-queue",function (job){
//     console.log(job.data);
// })
// app.listen(3030,function(){
//     console.log("server started")
// })
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Queue, Worker } = require("bullmq");

// Queue
let codeQueue = new Queue("code-queue", {
    connection: {
        host: 'localhost',
        port: 6379,
    },
});

app.post("/api/submission", async function(req, res) {
    let { qId, code, language } = req.body;
    // Add job to queue
    let reuslt = await codeQueue.add("code-queue", { qId, code, language });
    console.log("Job added:", reuslt.id);

    res.json({
        submissionId: reuslt.id
    });
});

// Worker to process jobs
let worker = new Worker("code-queue", function(job) {g
    // console.log("Processing job data:", job.data);
    let {qId,code,language}=job.data;
    setTimeout(()=>{
        return {
        qId:qId,
        status:success,
        time:"4ms",
        beat:"top 10%"
    }
    },5000)

});

app.listen(3030, function() {
    console.log("Server started on port 3030");
});
// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const { Queue } = require("bullmq");

// // Create queue connection
// const codeQueue = new Queue("code-queue", {
//   connection: {
//     host: "myredis.taskforce.run",
//     port: 6379,
//   },
// });

// // API route
// app.post("/api/submission", async function (req, res) {
//   const { qId, code, language } = req.body;

//   // Add job to queue
//   const job = await codeQueue.add("code-job", {
//     qId,
//     code,
//     language,
//   });

//   console.log("Job added:", job.id);

//   res.json({
//     message: "Job added successfully",
//     jobId: job.id,
//   });
// });

// app.listen(3030, function () {
//   console.log(" Server started on port 3030");
// });