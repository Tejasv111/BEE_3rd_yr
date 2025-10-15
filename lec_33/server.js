const {WebSocketServer} = require("ws");
const wss = new WebSocketServer({port:8888});
wss.on("connection",(socket)=>{
    console.log("User Connected");
    socket.on("message",(message)=>{
        console.log("message recieved "+message.toString());
        if(message.toString()==="hi"){
            socket.send("hlo");
        }
    })
})
// let allSocket = [];
// wss.on("connection",(socket)=>{
//     console.log("User Connected");
//     allSocket.push(socket);
//     socket.on("message",(message)=>{
//         console.log("message recieved "+message.toString());
//         allSocket.forEach((s)=>{
//             s.send(message.toString());
//         })

//     })
// })