let tasks = document.getElementById('aadd');
let button = document.getElementById('button');
let tasklists = document.getElementById('task-list');

button.addEventListener('click',function(){
    let usertask = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    tasklists.prepend(checkbox);
    usertask.textContent = tasks.value;
    tasklists.appendChild(usertask);

    checkbox.addEventListener('change', function(){
        if(usertask.className == 'checked'){
            usertask.className = 'unchecked';
        }
        else {
            usertask.className = 'checked';
        }
    

    });


});
