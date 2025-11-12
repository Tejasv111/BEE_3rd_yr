const {WebSocketServer} = require('ws');
let {subscriber}=require("../shared/index");
const wss = new WebSocketServer({ port: 8080 });
let allsocket =[];
wss.on("connection",(socket)=> {
    (async function orderbbokUpdate(){
    await subscriber.SUBSCRIBE("book_Update", (message) => {
        
        let parsedMessage = JSON.parse(message);
        console.log(parsedMessage);
    });
} )()

    console.log("Client connected");
  });

// (async function orderbbokUpdate(){
//     await subscriber.SUBSCRIBE("book_Update", (message) => {

//         let parsedMessage = JSON.parse(message);
//         console.log("Received message:", parsedMessage);
//     });
// } )()// IIFE  -- Immediately Invoked Function Expression
function broadcast(message){
    allsocket.forEach((socket)=>{
        socket.send(JSON.stringify(data));
    })
}