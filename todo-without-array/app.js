
// let inpEl = document.querySelectorAll(".todo-input")[0]
// let todoListDiv = document.querySelectorAll(".todo-list")[0]


// function add(){
//     let newTodo = inpEl.value
//     printAllTodos(newTodo)
//     inpEl.value = ''     
// }

// // function printAllTodo(todoText){
// //     let newTodoItem = makeTodo(todoText)
// //     todoListDiv.appendChild(newTodoItem)
// // }
// function printAllTodos(todoText) {
//     let newTodoItem = makeTodoEl(todoText);
//     todoListDiv.appendChild(newTodoItem);
//   }

// function makeTodoEl(newTodoText){
//     let pEl = document.createElement("P")
//     let textNode = document.createTextNode(newTodoText)
//     pEl.appendChild(textNode)
   
//     let btndelt = document.createElement("BUTTON")
//     let btnText = document.createTextNode("Delete")
//     btndelt.appendChild(btnText)
//     btndelt.setAttribute("onclick","delete(this)")


//    pEl.appendChild(btndelt)




// }


// function add() {
//     let newTodo = todoInput.value;
//     printAllTodos(newTodo);
//     todoInput.value = "";
//   }
//   function printAllTodos(todoText) {
//     let newTodoItem = makeTodoEl(todoText);
//     todoListDiv.appendChild(newTodoItem);
//   }
  
//   function makeTodoEl(newTodoText) {
//     let pEl = document.createElement("P");
//     let textNode = document.createTextNode(newTodoText);
//     pEl.appendChild(textNode);
  















let todoInput = document.querySelectorAll(".todo-input")[0];
let todoListDiv = document.querySelectorAll(".todo-list")[0];

function add() {
  let newTodo = todoInput.value;
  printAllTodos(newTodo);
  todoInput.value = "";
}
function printAllTodos(todoText) {
  let newTodoItem = makeTodoEl(todoText);
  todoListDiv.appendChild(newTodoItem);
}

function makeTodoEl(newTodoText) {
  let pEl = document.createElement("P");
  let textNode = document.createTextNode(newTodoText);
  pEl.appendChild(textNode);

  let delBtn = document.createElement("BUTTON");
  let delText = document.createTextNode("Delete");
  delBtn.appendChild(delText);
  delBtn.setAttribute("onclick", "deleteTodo(this)");

  let editBtn = document.createElement("BUTTON");
  let editText = document.createTextNode("Edit");
  editBtn.appendChild(editText);
  editBtn.setAttribute("onclick", "editTodo(this)");

pEl.appendChild(delBtn)

pEl.appendChild(editBtn)


  return pEl;
}



function deleteTodo(el){
    let target = el.parentNode
    todoListDiv.removeChild(target)
}

 
let todoInputContainer = document.querySelectorAll("#add-todo-container")[0];
let editTodoContainer = document.querySelectorAll("#edit-todo-container")[0];
let editForm = document.querySelectorAll(".edit-todo-input")[0];

let editValue;

function editTodo(el){
 if(todoInputContainer.className === 'hide'){
  erroeMsg()
 }
   else{
      editValue = el.parentNode.childNodes[0]
   editForm.value = editValue.nodeValue;
    todoInputContainer.className += 'hide'
editTodoContainer.className = ''
    }
  }

  


function updateTodo(){
   
    editValue.nodeValue = editForm.value
    todoInputContainer.className = "";
      editTodoContainer.className += " hide";
}





// function editTodo(el) {
//   editValue = el.parentNode.childNodes[0];
//   editForm.value = editValue.nodeValue;
//   todoInputContainer.className += " hide";
//   editTodoContainer.className = "";
// }

// function updateTodo() {
//   console.log(editForm.value);
//   editValue.nodeValue = editForm.value;
//   todoInputContainer.className = "";
//   editTodoContainer.className += " hide";
// }






let paraEl = document.querySelectorAll(".error-msg")[0]


function erroeMsg(){
    let errorEl = document.querySelectorAll(".error-msg")[0]
     let msg1 = "please edit your current Todo"
     errorEl.className = 'error'
 let msg = document.createTextNode(msg1)
 errorEl.appendChild(msg)
 
 }
// function updateTodo() {
//   console.log(editForm.value);
//   editValue.nodeValue = editForm.value;
//   todoInputContainer.className = "";
//   editTodoContainer.className += " hide";
// }
