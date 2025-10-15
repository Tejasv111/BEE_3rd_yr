import { useEffect, useState,useRef } from 'react'



function App() {
let [ws,setWs] = useState(null);//to create state variable
let inputRef = useRef()//Store any dom element reference and it is different form usestate because it does not trigger re rendering of component
useEffect(()=>{
  let socket = new WebSocket("ws://localhost:8888");
  socket.onmessage = (function(e){
    console.log(e.data);
  })
  setWs(socket);
},[])
function sendMessage(){
  let message = inputRef.current.value;
  ws.send(message);
}

  return (
    <>
     <h1>Ping Pong</h1>
     <input ref={inputRef} type="text" />
     <button onClick={sendMessage}>send</button>
    </>
  )
}

export default App
