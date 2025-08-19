//To add new element
//1. Create a new elementElement function
// 2. insert req data in  that element using innerText and innerhtml
// 3. insert new element parent container using append child or append
let todoContainer = document.querySelector(".container");
let todo = {
    id:2343,
    title:"Study at 9 pm"
}
function addTodo(todo){
    let li = document.createElement("li");
    li.innerHTML = `<li class="todo">
            <div>
                <input type="checkbox" name="" id="">
                <h1>${todo.title}</h1>
                <div>
                    <button>Remove</button>
                    <button>Edit</button>
                </div>
            </div>
        </li>`
   todoContainer.appendChild(li); 
}
addTodo(todo);