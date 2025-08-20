const express = require("express");
const { m1,m2} = require("./middleware/firstMiddleware")
const app = express();
app.use(express.static(__dirname+"/public"))
app.use(m1)
// app.use(m2)
app.get("/health",(req,res,next)=>{
    console.log("running controller function")
    next()
    res.json({
        status:"ok",
        message:"server running ok"
    })
})
app.use(m2)
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.get("/",(req,res)=>{
//     res.send("hi")
// })

app.listen(3000,()=>{
    console.log("server connected");
})