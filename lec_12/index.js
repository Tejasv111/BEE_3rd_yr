let arr = ["red","green","yellow","pink","aqua"];
let intervalId;
let box = document.querySelector(".box");
let btn = document.querySelector("#btn");
let stop = document.querySelector("#stop")
btn.addEventListener("click",()=>{
    if (intervalId) return;
   intervalId= setInterval(()=>{
    const randomIndex = Math.floor(Math.random() * arr.length);
    box.style.backgroundColor = `${arr[randomIndex]}`;
    },100);
    console.log(intervalId)
})
stop.addEventListener("click",()=>{
    clearInterval(intervalId);
    box.style.backgroundColor = "white";
    intervalId = null;
})

