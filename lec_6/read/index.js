const fs = require("fs");
// fs.readFile("../soni.txt","utf-8",(err,data)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log(data);
// })
// fs.readFile("../soni.txt","utf-8",(err,data)=>{
//     if(err){
//         return console.log(err);
//     }
//     data1 = data
//     console.log(data1);
// })
// fs.readFile("../demo.txt","utf-8",(err,data)=>{
//     if(err){
//         return console.log(err);
//     }
//     data2 = data
// })
const data1 =fs.readFileSync("../demo.txt",'utf-8');
const data2 =fs.readFileSync("../soni.txt",'utf-8');
fs.writeFile("../result.txt",data1+data2,(err)=>{
    if(err){
        return console.log(err);
    }

})
// space hatana heh 
