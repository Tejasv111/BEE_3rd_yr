let{createClient} = require("redis");
let client = createClient();
async function notify(){
    await client.PUBLISH("notify-me",JSON.stringify({event_id:1,message:"hii"}));
}
setTimeout(()=>{
    notify();
},2000)

client.connect().then(()=>{
    console.log("redis connected...");
})