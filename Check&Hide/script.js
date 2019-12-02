var taskList = {
    tasks: []
}

document.querySelector('.header').textContent = 'Monday';

function getInputValues() {
    var taskName = document.querySelector('#taskInput').value;
    return taskName;
}

function addInputValuesToArray(taskName) {
    taskList.tasks.push(taskName);
}

function updateUI() {

    for(i = 0; i < taskList.tasks.length; i++) {

        var task = taskList.tasks[i];

        var list = document.createElement("LI"); 
        list.className = 'list-group-item';                // Create a <li> node
        var listItem = document.createTextNode(task);         // Create a text node
    }

    list.appendChild(listItem);                              // Append the text to <li>
    document.getElementById("list1").appendChild(list);
}


document.getElementById('addBtn').addEventListener('click', function() {
    
    addInputValuesToArray(getInputValues());
    
    updateUI();
     
    console.log(taskList);

    document.querySelector('#taskInput').value = '';

    
    
});



document.getElementById('clearList').addEventListener('click', function() {
    clearArray();

    var ul = document.getElementById("list1");
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
        var el = document.querySelector('.list-group-item');
        el.remove(); // Removes the div with the 'div-02' id
    }
    
});


var list = document.querySelector('.list-group');
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {

    ev.target.classList.toggle('checked');
    }
}, false);






function clearArray() {
    for(i = 0; i < taskList.tasks.length + 2; i++) {
        taskList.tasks.pop(); 
    } 
}



var addItemToList = function(task) {
     // Append <li> to <ul> with id="myList"
     var list = document.createElement("LI"); 
     list.className = 'list-group-item';                // Create a <li> node
     var listItem = document.createTextNode(task.name);         // Create a text node
     list.appendChild(listItem);                              // Append the text to <li>
     document.getElementById("list1").appendChild(list);
}












