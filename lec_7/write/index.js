let users = [
    {
        name:"Nitesh",
        age:"24",
        address:"Delhi"
    },
     {
        name:"Ritik",
        age:"25",
        address:"Faridabad"
    },

]
const fs = require("fs");
fs.writeFile("../user.txt",JSON.stringify(users),(err)=>{
    if(err){
        return console.log(err);
    }
    console.log("users written!!");
})