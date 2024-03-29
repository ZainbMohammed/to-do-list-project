// declare variables to catch html elements
let input = document.getElementById('input');
let button = document.getElementById('btn');
let lists = document.getElementsByClassName('list-container')[0];

// let tasksLists = [];

// event when click on add button to add a new task to the list
function addTask(){

    if(input.value.trim() ===""){
        alert('should be enter a task to add');
    }
    else{
        let task = document.createElement("li");
        task.innerHTML = `${input.value}<img src='./images/cancel 2.png'>`;
        lists.appendChild(task);
    }
    input.value = '';
    storeTasks();
}
// event when clisk on one task to make it checked task
lists.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        storeTasks();
    }else if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        storeTasks();
    }
},false)

// to store the exist tasks in local stoarge
function storeTasks(){
    localStorage.setItem('tasks',lists.innerHTML);
}

// to retrivr tasks that stored in local stoarge and show them
function showTasks(){
    lists.innerHTML = localStorage.getItem('tasks');
}
showTasks();