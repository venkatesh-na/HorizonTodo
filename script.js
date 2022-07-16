//97% of the website in the world uses javascript for their frontend
//querySelector return the first element that matches the css selector that we have menstioned
const input = document.querySelector("input");
const button = document.querySelector("button")
const list = document.querySelector(".list")
//dblclick

function DeleteTodo(){
    const allDel = document.querySelectorAll("#del");
    allDel.forEach((delElement)=>{
        //explain delElement and forEach
            delElement.addEventListener("click",(e)=>{
                localStorage.setItem("data",JSON.stringify(arr.filter(a=>a.id != e.target.parentElement.id)))
                e.target.parentElement.remove();
            })
    })
}

let arr = []
if(localStorage.getItem("data") != null){ //if the data is in the localstorage
    arr = JSON.parse(localStorage.getItem("data"))
}
if(arr.length > 0){
   list.innerHTML = arr.map(e=>{
    return `<div id = "${e.id}">
    <p>${e.item}</p>
    <button id = "del">del</button>
    </div>`
   }).join("")
   DeleteTodo()
}

document.addEventListener("DOMContentLoaded",()=>{
    button.addEventListener("click",handleButton);
    function handleButton(event){
        event.preventDefault();                       
        let id = Math.floor(Math.random() * 1000); //geberating id

        arr.push({ item: input.value, id : id });
        localStorage.setItem("data",JSON.stringify(arr)); //saving in localstorage

        const div = document.createElement("div");
        div.id = id;                                
        div.innerHTML = `<p>${input.value}</p><button id = "del">del</button>`
        list.appendChild(div); //appending div as child of body

        input.value = "" //empty text box after clicking add button
    
        //fetching all delete button element on every click of add button
        DeleteTodo()
    }
})

