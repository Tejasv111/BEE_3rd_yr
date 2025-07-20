const { rejects } = require("assert");
const { resolve } = require("path");

//promise is an object which represent eventual completion or failure of an asyc operation
 let p = new Promise((resolve,reject)=>{
    resolve("done");
 })
 console.log(p);
 p.then((data)=>{
    console.log(data);
 })
 p.catch((err)=>{
 console.log(err);
 })

 let product = [{
    name:"Samsung",
    amount:70000,  
},
{
    name:"Iphone 16",
    amount:100000
}
]


function buyProduct(productName){
    return new Promise((resolve, reject)=>{
        let isProduct=product.filter((p)=>p.name==productName)[0]; 
        if(!isProduct){
            reject("Product is not available");
        }else {
            resolve(isProduct.amount);
        }

    })
}
let balance=200000;
function deductMoney(amount){
return new Promise((resolve, reject)=>{
    if(amount>balance){
        reject("insufficient balance");
    }else{
        balance-=amount;
        resolve("Product purchased");
    }
})
}
buyProduct("Iphone").then((amount) => deductMoney(amount))
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})