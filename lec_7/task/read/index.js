const fs = require("fs");
let userData = [];
fs.readFile("../userA.txt","utf-8",(err,dataA)=>{
    if(err){
        return console.log(err)
    }
    let usersA = JSON.parse(dataA);
    let i= 0;
    usersA.forEach(element => {
        userData[i++] = element
    });
    fs.readFile("../userB.txt","utf-8",(err,dataB)=>{
         if(err){
        return console.log(err);
    }
    let usersB = JSON.parse(dataB)
      usersB.forEach(element => {
        userData[i++] = element
    });
    console.log(userData);
    fs.writeFile("../finalUsers.txt",JSON.stringify(userData),(err)=>{
        if(err){
            return console.log(err);
        }
        console.log("usersA written!!");
    })

    })
    
})
// concat seh vi hoga aur spread operator seh vi ho sakta