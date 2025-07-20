const fs = require("fs")
const { resolve } = require("path")
function read(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,"utf-8",(err,data)=>{
            if(err){
                return reject(err)
            }
            let users = JSON.parse(data)
            resolve(users)
        })
    })
}
function write(filePath,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,JSON.stringify(users),(err)=>{
            if(err){
                return reject(err);
            }
            resolve("users written!!");
        })
    })
   
}
module.exports.read = read;
module.exports.write = write;