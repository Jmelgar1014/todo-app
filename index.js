const btn = document.querySelector('button');
const list = document.getElementById('todos');
const text = document.getElementById('input-box');
const itemText = document.getElementById('todos');


//add todo item to list
function doThis(){
    if(text.value == ""){
        alert("Please enter a Todo Item.");
    }else{
        let toDo = document.getElementById('input-box').value;

        //add btn to remove todo item
        let removeBtn = document.createElement('button');
        removeBtn.setAttribute('id','remove-item');


        //create li for every todo entered
        let newElement = document.createElement('li');
        let textItem = document.createElement('p');
        textItem.setAttribute('id','item');
        let text = document.createTextNode(toDo);
        newElement.appendChild(textItem);
        textItem.appendChild(text);
        console.log(text);

        localStorage.setItem('todo',JSON.stringify(toDo));


        //add x svg to button



        //append new item and remove btn  to ul
        let todoItem =document.querySelector('ul').appendChild(newElement);
        todoItem.appendChild(removeBtn);
    }
}


//to remove todo from list
function removeItem(e){
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
}





//when todo item is inputted reset input box
function clearInput(){
    let input = document.getElementById('input-box');
    input.value = '';
}


//function to cross out item as completed
function itemComplete(item){
    if(item.target.tagName === "P"){
        if(item.target.classList.contains('active')){
            item.target.className = "";
            item.target.style.textDecoration = 'none';
        }else{

            item.target.classList.add('active');
            item.target.style.textDecoration = 'line-through';
        }
    }

    

    
}


btn.addEventListener('click', doThis);
btn.addEventListener('click',clearInput);

itemText.addEventListener('click',itemComplete,false);

list.addEventListener('click',removeItem,false);