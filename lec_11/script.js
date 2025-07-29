//access dom element
//using id
//using class
//using tag
//using querydelector
let elem1 = document.getElementById("heading");
let li = document.getElementsByClassName("item");
let elem2 = document.getElementsByTagName("p");
let elem3 = document.querySelector(".item");
let elem4 = document.querySelectorAll(".item");
let container = document.querySelector("#container");
console.log(elem1);
console.log(li);
console.log(elem2);
console.log(elem3);
console.log(elem4);
elem4.forEach((elem)=>{
    console.log(elem)
})
//properties
//inner html
//inner text
//text content
let data = elem1.innerText;
let data2 = container.innerHTML;
let data3 = container.innerText;
let data4 = container.textContent

console.log(data);
console.log(data2);
console.log(data3);
console.log(data4);
// diff between textcontent and inner text

// add content
container.innerHTML = `<li class="item">item5</li>`;

//getAttributes
//set attributes
//class list
//console.dir()
// console.dir(elem1.getAttribute("id"));
let form = document.querySelector("#page");
let btn = document.querySelector("#btn");
form.style.display = "none";
btn.addEventListener("onclick",()=>{
    form.style.display = "block";
    console.log("btn click");
})

