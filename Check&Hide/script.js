var taskList = [];

document.getElementById('addBtn').addEventListener('click', function() {
    var task = document.getElementById('taskInput').value;

    taskList.push(task);
    console.log(taskList);

    for (i = 0; i < taskList.length; i++) {
        task = taskList[i]
    }
    addItemToList(task);    
    
    document.getElementById('taskInput').value = '';
    
});


// document.getElementById('checkBtn').addEventListener('click', function() {
//     var task = document.getElementById('taskInput').value;

//     taskList.push(task);
//     console.log(taskList);

//     for (i = 0; i < taskList.length; i++) {
//         task = taskList[i]
//     }
//     addItemToList(task);      
    
// });



var addItemToList = function(task) {
    var node = document.createElement("LI"); 
    node.className = 'list-group-item';                // Create a <li> node
    var textnode = document.createTextNode(task);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.querySelector(".list1").appendChild(node);     // Append <li> to <ul> with id="myList"
}








