let{createClient} = require("redis");
let client = createClient();
async function notify_me(){
    await client.SUBSCRIBE("notify-me",(message)=>{
        console.log(message);
    });
}
notify_me();
client.connect().then(()=>{
    console.log("redis connected...");
})