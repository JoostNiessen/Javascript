

var taskController = (function () {
    let taskList = {
        tasks: []
    },
        defaultSettings = {
            inputSelector: '#taskInput',
            list1: 'list1',
            addTaskButton: 'addBtn',
            removeTaskButton: 'clearList',
            emptyListButton: 'emptyList'

        }


    let setSettings = function (settings) {
        Object.assign(defaultSettings, settings);
    }

    /**
     * gets input from the DOM
     */
    let getInput = function () {
        return {
            value: document.querySelector(defaultSettings.inputSelector).value
        }
    }

    /**
     * takes input as parameter and pushes to array
     */
    let addInputToArray = function (taskName) {

        var task = {
            name: taskName,
            checked: false
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
            var taskName = taskList.tasks[i].name.value;
        }

        list.insertAdjacentHTML('beforeend', buttonMaker(taskName));

    }

    /**
     * emptys the array and updates the UI
     */
    let emptyList = function () {

        taskList.tasks = [];

    }

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

                for (let i = 0; i < taskList.tasks.length; i++) {
                    const task = taskList.tasks[i];
                    task.checked = true;
                }
                ev.target.classList.toggle('checked');
            }

        }, false);
    }

    let targetCheckedElement = function () {

        var list = document.querySelector('.list-group-item');

        for (let i = 0; i < taskList.tasks.length; i++) {
            const task = taskList.tasks[i];
            if (list.classList === 'checked') {
                task.checked = true;
            }
        }
    }

    /**
     * uses task as parameter to filter array
     */
    function checkTasks(task) {
        return !task.checked;
    }

    /**
     * filters checked tasks
     * sets taskList.tasks equal to array of unchecked tasks
     */
    function checkFilter() {
        console.log(taskList.tasks.filter(checkTasks));
        var filtered = taskList.tasks.filter(checkTasks);
        taskList.tasks = filtered;
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

        UIctrl.removeUI();


        // 1. reassigns array to filtered array
        UIctrl.checkFilter();


        UIctrl.updateUI();


        // 2. remove clicked items from array 


        //  1. Clear list elements UI
        // UIctrl.clearListElements();

    }

    var ctrlEmptyList = function () {
        UIctrl.emptyList();

        UIctrl.updateUI();
    }


    var ctrlArchiveList = function () {
        UIctrl.targetCheckedElement();

    }


    document.getElementById(taskController.defaultSettings.addTaskButton).addEventListener('click', ctrlAddItem);

    document.getElementById(taskController.defaultSettings.removeTaskButton).addEventListener('click', ctrlRemoveItem);
    document.getElementById(taskController.defaultSettings.emptyListButton).addEventListener('click', ctrlEmptyList);


    // document.addEventListener('keypress', function (event) {
    //     if (event.keyCode === 13 || event.which === 13) {
    //         ctrlAddItem();
    //     }
    // });


})(taskController);
