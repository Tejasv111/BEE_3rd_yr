const fs = require("fs");
fs.writeFile("../demo.txt","welcome",function(err){
    if(err){
        return console.log(err);
    }
    console.log("FILE DONE")

})
// console.log("hi soni");
fs.writeFile("../soni.txt","I am Soni Sharma",(err)=>{
    if(err){
        return console.log(err);
    }
})
