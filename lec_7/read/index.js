const fs = require("fs");
const { json } = require("stream/consumers");
const {read} = require("../IOoperation/util") 
// fs.readFile("../user.txt","utf-8",(err,data)=>{
//     if(err){
//         return console.log(err)
//     }
//     let users = JSON.parse(data)
//     console.log(users[0]);
// })
async function readFile(filepath) {
    let data = await read(filepath);
    console.log(data);
}
readFile("../users.txt");