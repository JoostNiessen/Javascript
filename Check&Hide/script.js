var taskList1 = {
    tasks: [],
    listName: 'Monday'
}
var task = {
    name: '',
    priority: 0
};

// taskList1.tasks.push(task); 

// task.name = 'freddy';
// task.priority = 9;


document.querySelector('.header').textContent = taskList1.listName;


document.getElementById('addBtn').addEventListener('click', function() {
    var task = document.getElementById('taskInput').value;

    taskList1.tasks.push(task);
    console.log(taskList1.tasks);

    for (i = 0; i < taskList1.tasks.length; i++) {
        task = taskList1.tasks[i]
    }
    addItemToList(task);    
    
    document.getElementById('taskInput').value = '';
    
});



var list = document.querySelector('.list-group');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);




function clearList() {
    // var element = document.querySelector(".list-group-item");
    // if (element.classList.contains("checked") === true) {
    //     element.classList.toggle('empty');
    // }

    for (i = 0; i < taskList1.tasks.length; i++) {
        task = taskList1.tasks[i]
    }
}



var addItemToList = function(task) {
    var node = document.createElement("LI"); 
    node.className = 'list-group-item';                // Create a <li> node
    var textnode = document.createTextNode(task);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("list1").appendChild(node);     // Append <li> to <ul> with id="myList"
}












