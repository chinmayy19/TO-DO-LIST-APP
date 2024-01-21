const todoValue = document.getElementById("todoText"),
listItems = document.getElementById("list-items"),
addUpdateClick = document.getElementById("AddUpdateClick");
AlertMessage = document.getElementById("AlertMessage");

let updateText;

 let todoData = JSON.parse(localStorage.getItem("todoData"));
 if(!todoData){
    todoData=[];
 }

todoValue.addEventListener("keypress", function(e){
    if(e.key === "Enter") {
        addUpdateClick.click();
    }
});
ReadToDoItems();
function ReadToDoItems () {
    todoData.forEach(element => {
        let li = document.createElement("li");
        let style ="";
        if(element.status){
            style="style='text-decoration: line-through'";
        }
        const todoItems = `<div>${style} ondblclick="CompleteTodoItem(this)"${element.item} </div>`
        li.innerHTML=todoItems;
        listItems.appendChild(li);
    });

}
function CreateToDoData() {
    if(todoValue.value === "") {
        alert ="Please Enter your todo text!";
        todoValue.focus();
    }
    let li = document.createElement("li");
    const todoItems = `<div ondblclick="CompleteTodoItem(this)">${todoValue.value} </div>
    <div><img class="edit todo-controls" onclick="UpdateToDoItems(this)" src= "images/draw.png" />
         <img class="delete todo-controls"onclick="DeleteToDoItems(this)" src= "images/bin.png" /></div>`;

    li.innerHTML = todoItems;
    listItems.appendChild(li);
    todoValue.value = "";

 if(!todoData){
    todoData=[];
 }
 let dataItem = {item: todoData.value, status: false};
 todoData.push(dataItem);

}

function CompleteTodoItem(e) {
    console.log(e.parentElement);
    if(e.parentElement.querySelector("div").style.textDecoration === ""){
     e.parentElement.querySelector("div").style.textDecoration = "line-through";
    todoData.forEach((element)=>{
        if(e.parentElement.querySelector("div").innerText.trim() == element.item){
            element.status=true;
        }
    })
}
}
function UpdateOnSelectionItems() {
    updateText.innerText = todoValue.value;
    addUpdateClick.setAttribute("onclick","CompleteTodoItem()");
            addUpdateClick.setAttribute("src","images/plus.png")
   todoValue.value = "" ;
}

function UpdateToDoItems(e) {
    if (e.parentElement.parentElement.querySelector("div").style.textDecoration === "");
    {
            todoValue.value = 
            e.parentElement.parentElement.querySelector("div").innerText;
            addUpdateClick.setAttribute("onclick","UpdateOnSelectionItems()");
            addUpdateClick.setAttribute("src","images/refresh.png")
        }
}
function DeleteToDoItems(e){
    let deleteValue =
     e.parentElement.parentElement.querySelector("div").innerText;
if (confirm(`Are you sure?. Do you want to delete this ${deleteValue}!`)){
    e.parentElement.parentElement.parentElement.querySelector("li").remove();

}
}

