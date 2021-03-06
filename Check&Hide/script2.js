var taskList = {
    tasks: []
}




/***
 * Eventlistener on the + button in the DOM
 * sets the input field to ''
 * Contains:
 * addInputValuesToArray();
 * getInputValues(); // closure
 * upDateUI();
 */
document.getElementById('addBtn').addEventListener('click', function() {
    
    addInputValuesToArray(getInputValues());
    
    updateUI();
     
    console.log(taskList);

    document.querySelector('#taskInput').value = '';
    
});



/**
 * Eventlistener on the CLEAR LIST button in the DOM
 * clears array of checked items
 * clears the list of elements
 * Contains:
 * clearArray();
 * clearListElements();
 */
document.getElementById('clearList').addEventListener('click', function() {
    clearArray();
    clearListElements();

    console.log(taskList.tasks);
    
});



/**
 * create array of all elements with tag <li> inside of #list1
 * loop through array to find 'checked' elements
 * if there are 'checked' elements, remove those
 */
function clearListElements() {
    var ul = document.getElementById("list1");
    var items = ul.getElementsByTagName("li");
    console.log(items.length);

    
    
    for (var i = 0; i < items.length + 1; ++i) {
        var el = document.querySelector('.checked');

        if (el !== null){
            el.remove(); 
            
        }
    }
}



/***
 * sets the 'title' of the to do list
 * NOTE: this needs to be dynamic
 */
document.querySelector('.header').textContent = 'Monday';


/**
 * gets input from DOM and returns it
 */
function getInputValues() {
    var taskName = document.querySelector('#taskInput').value;
    return taskName;
}


/***
 * requires value to push to array
 */
function addInputValuesToArray(taskName) {
    var task = {
        name: taskName
    }
    taskList.tasks.push(task);
}

/**
 * Loop: Gets all tasks from the array
 *       Creates a <li> element for every task and assigns Bootstrap-class to it
 * Appends listItems to List 
 */
function updateUI() {
    
    for(let i = 0; i < taskList.tasks.length; i++) {

        var task = taskList.tasks[i].name;

        var list = document.createElement("LI"); 
        list.className = 'list-group-item';                // Create a <li> node
        var listItem = document.createTextNode(task);         // Create a text node
    }

    list.appendChild(listItem);                              // Append the text to <li>
    document.getElementById("list1").appendChild(list);
}


/**
 * Selects UL, adds eventlistener on target
 * if target is LI toggle .checked, specified in the css
 */
(function targetListelement() {
    var list = document.querySelector('.list-group');
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    }
}, false);
})();



/**
 * Selects list, adds eventlistener to click.
 * if checked is true, match content with index
 * use index to splice
 * ----- not working
 *   */
function selectInArray() {
    var list = document.querySelector('#list1');

    list.addEventListener('click', function(ev) {
    let checked = list.querySelector('.checked');
    if (checked !== null) {
        

        var contentOfItem = checked.textContent;

        var indexOfItem = taskList.tasks.indexOf(contentOfItem);

        console.log(indexOfItem);

        taskList.tasks.splice(indexOfItem, 1);
        console.log(taskList.tasks);

        console.log(typeof(contentOfItem));
        

    }
}, false);

}



// array.prototype.indexof.call(parent.children, child)



function clearArray() {

    // check if element is checked
    // if element is not null 
    // remove element from array
    // get split index
    
    // for(i = 0; i < taskList.tasks.length; i++) {

    //     var task = taskList.tasks[i];

    //     var el = document.querySelector('.checked');

    //     if (el !== null){
    //         taskList.tasks.pop(task);      
    //     }        // Create a text node
    // }

}
