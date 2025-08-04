const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("hi")
})

app.listen(2477,()=>{
    console.log("server started")
})