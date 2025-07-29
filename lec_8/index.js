const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello')

})
app.get("/watch",(req,res)=>{
    let videoId= req.query.v;
    let nId = req.query.n;

    res.send("id got it"+" "+videoId+" "+nId)
})
app.get("/watch",(req,res)=>{
    console.log(req.params.v)
    console.log(req.params.n)
    res.send("got it !!")
    let nId = req.query.n;

    res.send("id got it"+" "+videoId+" "+nId)
})

app.listen(3000,function(){
    console.log('started')
});
//create server using express