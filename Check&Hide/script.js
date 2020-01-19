var taskController = (function () {
    let taskList = {
        tasks: []
    }

    let finishedTasks = {
        tasks: []
    },

    defaultSettings = {
        inputSelector: 'taskInput1',
        list1: 'list1',
        listItems: '.list-group-item',
        starButton: 'star',
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
        let input = document.getElementById(defaultSettings.inputSelector).value;

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
     * creates full html list element for every array object
     */
    let createListElement = function () {

        // select list
        var list = document.getElementById(defaultSettings.list1);

        // create html element
        // require taskName from array
        let buttonMaker = function (taskName) {
            var button = '<li class="list-group-item rounded-5 mt-1 d-flex unstarred unchecked">' + taskName + '<button id="star" class="btn btn-star d-flex ml-auto pt-1"><i class="far fa-star"></i></button></li>'
            return button;
        }

        removeUI();

        // for task in array, set taskName as variable
        for (let i = 0; i < taskList.tasks.length; i++) {
            var taskName = taskList.tasks[i].name;

            list.insertAdjacentHTML('beforeend', buttonMaker(taskName));

        }

    }


    let createList = function () {
        for (let i = 0; i < taskList.tasks.length; i++) {
            createListElement();
        }
    }


    /**
 * make array of all elements that are 'checked'
 * assigns array to new one 
 */
    let targetCheckedElement = function () {

        let unchecked = makeNewObjectArray(getArrayOfElements('unchecked'));
        let checked = makeNewObjectArray(getArrayOfElements('checked'));

        taskList.tasks = unchecked;


        finishedTasks.tasks = checked;


    }

    let showFinishedTasks = function () {

        let rewardPanel = document.getElementById('reward-panel');

        let div = document.getElementById('x');

        let  html = '<div id="reward-panel" class="col-md-4 justify-content-center mx-auto rounded-5 text-center reward-panel align-items-center"><i class="fas fa-crown fa-5x starredStyle p-3"></i><h2 class="reward text-light text-center py-3">Good Job!</h2></div>';

        if (finishedTasks.tasks.length > 3) {
            div.insertAdjacentHTML('afterbegin', html);
        }
        
        $("#reward-panel").click(function(){
            $("#reward-panel").hide();            
          });
    }

    
    let makeNewObjectArray = function (classArray) {

        let newObjectArray = [];

        for (let i = 0; i < classArray.length; i++) {
            const taskName = classArray[i];
            var task = {
                name: taskName
            }
            newObjectArray.push(task);
        }

        return newObjectArray;

    }


    /**
     * emptys the array 
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
        document.getElementById(defaultSettings.inputSelector).value = '';
    }

    /**
     * targets list element and toggles classname on click
     */
    let targetListelement = function () {
        var list = document.getElementById(defaultSettings.list1);
        list.addEventListener('click', function (ev) {

            if (ev.target && ev.target.nodeName == "LI") {
                ev.target.classList.toggle('unchecked');
                ev.target.classList.toggle('checked');
            }

        }, false);
    }


    /**
     * Targets the 'star' and sets classes to the elements:
     * 'starred' to the I element itself.
     * 'starred' to the LI element its in.
     */
    let targetStarredTasks = function () {
        document.getElementById(defaultSettings.list1).addEventListener("click", function (ev) {

            if (ev.target && ev.target.nodeName == "I") {
                ev.target.classList.toggle('starredStyle');
                var parent = ev.target.parentNode;
                parent.parentNode.classList.toggle('unstarred');
                parent.parentNode.classList.toggle('starred');
                // priorityHandler();
                prioritizeStarredTasks();
                createList();
            }
        });
    }


    let prioritizeStarredTasks = function () {

        var starred = makeNewObjectArray(getArrayOfElements('starred'));
        var unstarred = makeNewObjectArray(getArrayOfElements('unstarred'));

        emptyList();

        for (let i = 0; i < starred.length; i++) {
            const element = starred[i];
            taskList.tasks.push(element)
        }

        for (let i = 0; i < unstarred.length; i++) {
            const element = unstarred[i];
            taskList.tasks.push(element)
        }

        console.log(taskList.tasks);

    }



    let getArrayOfElements = function (className) {
        var classes = document.getElementsByClassName(className);
        var values = Array.prototype.map.call(classes, function (el) {
            return el.textContent;
        });

        return values;
    }

    let ctrlAddItem = function () {
        // get input and push to array
        addInputToArray(getInput());
        // create list element in List
        createListElement();
        // empty input field
        emptyInputField();
    }

    let targetElements = (function () {
        // target checked elements 
        targetListelement();
        // target and prioritize starred tasks
        targetStarredTasks();
    })();


    let removeElements = function () {
        // get array of all checked elements
        targetCheckedElement();
        // empty the UI list
        removeUI();
        // make new list for UI
        createList();
        // if finishedtasks > 5, give reward
        showFinishedTasks();
    }

    let clearList = function () {
        //  empty out the array
        emptyList();
        // empty out the UI
        removeUI();
    }

    return {
        defaultSettings: defaultSettings,
        ctrlAddItem: ctrlAddItem,
        removeElements: removeElements,
        clearList: clearList
    }

})();


var controller = (function (UIctrl) {

    var ctrlAddItem = function () {
        UIctrl.ctrlAddItem();
    }

    var ctrlRemoveItem = function () {
        UIctrl.removeElements();
    }

    var ctrlEmptyList = function () {
        UIctrl.clearList();
    }

    var ctrlArchiveList = function () {
        // code om naar firebase te schrijven.
    }

    document.getElementById(taskController.defaultSettings.addTaskButton).addEventListener('click', ctrlAddItem);

    document.getElementById(taskController.defaultSettings.removeTaskButton).addEventListener('click', ctrlRemoveItem);
    document.getElementById(taskController.defaultSettings.emptyListButton).addEventListener('click', ctrlEmptyList);
    document.getElementById(taskController.defaultSettings.archiveListButton).addEventListener('click', ctrlArchiveList);

})(taskController);



    //     /**
    //  * uses task as parameter to filter array
    //  */
    // function checkTasks(task) {
    //     return  ;
    // }

    // /**
    //  * filters checked tasks
    //  * sets taskList.tasks equal to array of unchecked tasks
    //  */
    // function checkFilter() {
    //     console.log(taskList.tasks.filter(checkTasks));
    //     taskList.tasks = taskList.tasks.filter(checkTasks);
    // }