var taskList1 = {
    tasks: [],
    listName: 'Monday'
}
var task = {
    name: '',
    priority: 0
};



// first fill list with object tasks, then load all the tasks in the list with a for loop

function getInputValue() {
    task.name = document.getElementById('taskInput').value;
}

function addTaskToArray() {
    taskList1.tasks.push(task); 
}

function showListInUI() {
    for (i = 0; i < taskList1.tasks.length; i++) {
        task = taskList1.tasks[i];
        
    }
    var list = document.createElement("LI"); 
    list.className = 'list-group-item';                // Create a <li> node
    var listItem = document.createTextNode(task.name);         // Create a text node
    list.appendChild(listItem);                              // Append the text to <li>
    document.getElementById("list1").appendChild(list);

}


document.querySelector('.header').textContent = taskList1.listName;


document.getElementById('addBtn').addEventListener('click', function() {
    getInputValue();

    addTaskToArray();

    showListInUI();


    addItemToList(task);    
    
    // set empty input field
    document.getElementById('taskInput').value = '';

    console.log(taskList1.tasks);
    
    
});


var list = document.querySelector('.list-group');
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {

    ev.target.classList.toggle('checked');
    }
}, false);




function clearList() {
        taskList1.tasks.pop(task); 

        console.log(taskList1.tasks);

}



var addItemToList = function(task) {
     // Append <li> to <ul> with id="myList"
}












