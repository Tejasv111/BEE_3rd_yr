let usersA = [
    {
        name:"Soni",
        age:"24",
        address:"Delhi"
    },
     {
        name:"Anup",
        age:"22",
        address:"Ambala"
    },

]
let usersB = [
    {
        name:"Vivek",
        age:"24",
        address:"Delhi"
    },
     {
        name:"Viany",
        age:"21",
        address:"Mohali"
    },

]
const fs = require("fs");
fs.writeFile("../userA.txt",JSON.stringify(usersA),(err)=>{
    if(err){
        return console.log(err);
    }
    console.log("usersA written!!");
})
fs.writeFile("../userB.txt",JSON.stringify(usersB),(err)=>{
    if(err){
        return console.log(err);
    }
    console.log("usersB written!!");
})