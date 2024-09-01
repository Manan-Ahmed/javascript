let inpEl = document.querySelectorAll(".inp")
let todoListDiv = document.querySelectorAll(".todo-list")

let allTodos = []


function add(){
   let newTodo =  inpEl[0].value
  allTodos.push(newTodo)
  printAllTodos()
   inpEl[0].value = ''
}


function printAllTodos(){
    todoListDiv[0].innerHTML = ''
    for (let i =0;i < allTodos.length;i++) {
        todoListDiv[0].innerHTML += `
        <p class="todo-${i}"> 
        ${allTodos[i]}
        <button class="btn-2" onclick="deleteTodo(${i})">delete</button>
        <button class="btn-2" onclick="editTodo(${i})">edit</button>

        </p>`
        // console.log(allTodos[i])
    }
}




function deleteTodo(index){
        allTodos.splice(index,1)
        printAllTodos()
}

let addTodoDiv = document.querySelectorAll("#add-todo-container")[0]
let editTodoDiv = document.querySelectorAll("#edit-todo-container")[0]
let  editInput  = document.querySelectorAll(".edit-todo-input")[0]

let editIndex;
function editTodo(index){
    if(isEditing) {
        displayError()
    }
    else {
    toggleTodo()
editInput.value = allTodos[index]
editIndex = index    
}
}



function updateTodo(){
    toggleTodo()
    allTodos.splice(editIndex,1,editInput.value)
    printAllTodos()
}
















let isEditing = false;
function toggleTodo() {
    if (isEditing) {
        addTodoDiv.className = "";//show submit
        editTodoDiv.className += " hide";//not show save
    }
    else {
        addTodoDiv.className += " hide";//not show submit
        editTodoDiv.className = "";//show save
    }
    isEditing = !isEditing;
}





let errorEl = document.querySelectorAll(".error-msg")[0];
function displayError() {
    errorEl.innerHTML = 'Please save current todo first.';
    setTimeout(function () {
        errorEl.innerHTML = "";
    }, 3000);
}

// let editIndex
// function editTodo(index) {
//     if (isEditing) {
//         displayError();
//     }
//     else {
//         toggleTodo();
//         editInput.value = allTodos[index];
//         editIndex = index;
//     }
// }

// toggleTodo()
// editInput.value = allTodos[index]
// editIndex = index


// function updateTodo(){
//    toggleTodo()
//    allTodos.splice(editIndex,1,editInput.value)
//   printAllTodos()
// }




