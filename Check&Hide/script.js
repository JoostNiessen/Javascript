

var taskController = (function () {
    let taskList = {
        tasks: []
    },
        defaultSettings = {
            inputSelector: '#taskInput',
            list1: 'list1',
            addTaskButton: 'addBtn',
            removeTaskButton: 'clearList',
            emptyListButton: 'emptyList',
            archiveListButton: 'archiveList'

        }


    let setSettings = function (settings) {
        Object.assign(defaultSettings, settings);
    }

    /**
     * gets input from the DOM
     */
    let getInput = function () {
        let input = document.querySelector(defaultSettings.inputSelector).value;        

        return input;
    }

    /**
     * takes input as parameter and pushes to array
     */
    let addInputToArray = function (taskName) {

        var task = {
            name: taskName
        }

        taskList.tasks.push(task);

        console.log(taskList.tasks);
        
    }


    /**
     * IF: creates elements of the array object
     * ELSE: selects list and removes all elements inside
     */
    let updateUI = function () {

        if (taskList.tasks.length > 0) {
            createListElement();
        } else {
            removeUI();
        }
    }

    /**
     * creates full html list element for every array object
     */
    let createListElement = function () {
        var list = document.getElementById(defaultSettings.list1);

        let buttonMaker = function (taskName) {
            var button = '<li class="list-group-item rounded-5 mt-1 d-flex">' + taskName + '<button class="btn btn-star d-flex ml-auto pt-1"><i class="far fa-star"></i></button></li>'
            return button;
        }

        for (let i = 0; i < taskList.tasks.length; i++) {
            var taskName = taskList.tasks[i].name;
        }

        list.insertAdjacentHTML('beforeend', buttonMaker(taskName));

    }

    /**
     * emptys the array and updates the UI
     */
    let emptyList = function () {

        taskList.tasks = [];

    }

    /**
     * Remove all elements of List1
     */
    let removeUI = function () {

        var ul = document.getElementById(defaultSettings.list1);
        var items = ul.getElementsByTagName("LI");

        for (var i = 0; i < items.length;) {

            var el = document.querySelector('.list-group-item');
            el.remove();
        }
    }

    /**
     * emptys out the input field
     */
    let emptyInputField = function () {
        document.querySelector(defaultSettings.inputSelector).value = '';
    }

    /**
     * targets list element and toggles classname on click
     */
    let targetListelement = function () {
        var list = document.getElementById(defaultSettings.list1);
        list.addEventListener('click', function (ev) {

            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }

        }, false);
    }


    /**
     * make array of all elements that are 'checked'
     * assigns array to new one 
     */
    let targetCheckedElement = function () {

        var classes = document.getElementsByClassName("checked");
        var values = Array.prototype.map.call(classes, function(el) {              
            return el.textContent;
        });

        var checked = [];

        for (let i = 0; i < values.length; i++) {
            const taskName = values[i];
            var task = {
                name: taskName
            }                    
            checked.push(task);         
        }

        taskList.tasks = checked;

        console.log(taskList.tasks);    
     
    }

    return {
        getInput: getInput,
        addInputToArray: addInputToArray,
        emptyList: emptyList,
        updateUI: updateUI,
        emptyInputField: emptyInputField,
        targetListelement: targetListelement,
        checkTasks: checkTasks,
        checkFilter: checkFilter,
        targetCheckedElement: targetCheckedElement,
        defaultSettings: defaultSettings,
        removeUI: removeUI
    }

})();


var controller = (function (UIctrl) {

    var ctrlAddItem = function () {

        // 1. get input
        input = UIctrl.getInput();

        // 2. add to array
        UIctrl.addInputToArray(input);

        // 3. add to UI 
        UIctrl.updateUI();

        // 4. empty input
        UIctrl.emptyInputField();


    }


    var ctrlCheckItem = (function () {
        // 1. highlight clicked item
        UIctrl.targetListelement();

        // 2. filter checked items
        // UIctrl.targetCheckedElement();


        // 3. for each index of array splice()
    })();


    var ctrlRemoveItem = function () {

        UIctrl.targetCheckedElement();

        UIctrl.removeUI();

        UIctrl.updateUI();

    }

    var ctrlEmptyList = function () {
        
        UIctrl.emptyList();

        UIctrl.updateUI();
    }


    var ctrlArchiveList = function () {

    }


    document.getElementById(taskController.defaultSettings.addTaskButton).addEventListener('click', ctrlAddItem);

    document.getElementById(taskController.defaultSettings.removeTaskButton).addEventListener('click', ctrlRemoveItem);
    document.getElementById(taskController.defaultSettings.emptyListButton).addEventListener('click', ctrlEmptyList);
    document.getElementById(taskController.defaultSettings.archiveListButton).addEventListener('click', ctrlArchiveList);


    // document.addEventListener('keypress', function (event) {
    //     if (event.keyCode === 13 || event.which === 13) {
    //         ctrlAddItem();
    //     }
    // });


})(taskController);
