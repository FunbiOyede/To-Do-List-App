let input = document.querySelector('#in');
let p = document.getElementById('p');
let del = document.getElementById('del');
let button = document.getElementById('icon');

let newTodo = document.getElementById('newTodo');
button.addEventListener('click', () =>{
    let textInput = input.value;

     if(textInput == "" ){
        swal({
            text:"Add a task",
        });
    }
    else{
       
        p.classList.add('hide');
        createTodo(textInput);
        clearInput();
    }

})

let clearInput = () =>{
    input.addEventListener('focus', () =>{
         input.value = "";
    })
}

let deleteAll = () =>{
    del.addEventListener('click', () =>{
        newTodo.classList.add('delete');
    })
}

deleteAll();

let createTodo = (elementCreated) =>{
  
    let task = document.createElement('p');
    task.innerHTML = `${elementCreated}`;
    task.classList.add('new-task')
     newTodo.append(task);
        task.addEventListener('click', (e) =>{
            task.classList.toggle('stroke')
            e.stopPropagation();
        })
}