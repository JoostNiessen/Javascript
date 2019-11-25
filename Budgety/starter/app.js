// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // create new item based on type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Add items to data structure
            data.allItems[type].push(newItem);

            // return the new element
            return newItem;
        },

        testing: function() {
            console.log(data);
            
        }
    }

})();


// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputVal: '.add__value',
        inputBtn: '.add__btn'

    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be inc er exp
                description: document.querySelector(DOMstrings.inputDesc).value,
                value: document.querySelector(DOMstrings.inputVal).value
            }
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    }
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {    
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }    
        });
    };



    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {
        var input, newItem;

        // 1. get input data
        input = UICtrl.getInput();
        

        // 2. add data to budgetcontroller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. add data to UI

        // 4. calculate budget

        // 5. display budget
        
    }

    return {
        init: function() {
            console.log("Application has started");
            setupEventListeners();     
        }
    }

})(budgetController, UIController);

controller.init(); // only function out of the modules
