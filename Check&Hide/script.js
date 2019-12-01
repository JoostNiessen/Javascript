var task;


document.querySelector('.btnAdd').addEventListener('click', function() {
    task = document.getElementById('addTask').value;
    console.log('free');
    
    document.querySelector('.todo-item').textContent = task;

});



