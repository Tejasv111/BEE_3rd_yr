const {WebSocketServer} = require("ws");
const wss = new WebSocketServer({port:8888});

let rooms=new Map();

wss.on("connection",(socket)=>{
    console.log("a new user connected")
    socket.on("message",function(message){
        let parsedMessage=JSON.parse(message)
        let {type,payload} =parsedMessage;
        if(type == "join"){
            let{roomId} = payload;
            if(!rooms.get(roomId)){
                rooms.set(roomId,new Set())
            }
            rooms.get(roomId).add(socket);
            console.log(rooms);
            socket.send("added to room")
        }



        else if (type === "chat") {
    // This assumes the client sends the roomId with the chat message
    // e.g., {"type": "chat", "payload": {"roomId": "red", "message": "Hi!"}}
    const { message, roomId } = payload; 
    
    const allClientsInRoom = rooms.get(roomId);

    // ✅ CHECK if the room exists before trying to use it
    if (allClientsInRoom) {
        // If it exists, broadcast the message
        allClientsInRoom.forEach(client => {
            // This check prevents sending the message back to the sender
            if (client !== socket) { 
                client.send(message);
            }
        });
    } else {
        // If the room doesn't exist, handle the error gracefully
        console.log(`Error: Attempt to chat in non-existent room: ${roomId}`);
        socket.send(`Error: Room "${roomId}" does not exist.`);
    }
}
    })
})





// const {WebSocketServer} = require("ws");
// const wss = new WebSocketServer({port:8888});

// let rooms = new Map();

// // Use 'wss' to listen for connections
// wss.on("connection",(socket)=>{
//     console.log("A new user connected");
//     socket.on("message",function(message){
//         try {
//             // Corrected the variable name typo
//             let parsedMessage = JSON.parse(message);
//             let {type, payload} = parsedMessage;

//             if (type === "join") {
//                 let {roomId} = payload;
//                 if (!rooms.get(roomId)) {
//                     rooms.set(roomId, new Set());
//                 }
//                 rooms.get(roomId).add(socket);
//                 console.log(`Socket added to room: ${roomId}`);
//                 socket.send(`You have joined room: ${roomId}`);
//             }
//         } catch (error) {
//             console.log("Failed to parse message or message was not JSON:", message.toString());
//         }
//     });
// });

// console.log("WebSocket server is running on port 8888...");

