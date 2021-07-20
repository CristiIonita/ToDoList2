let addToDoButton= document.getElementById('addToDo');
let toDoContainer= document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    var spinerss = document.createElement('div');
    var data = document.createElement('div');
    spinerss.classList.add('spinner-border');
    spinerss.classList.add('makeitright');
    //data.classList.add('makeitleft');
    paragraph.classList.add('paragraph-styling')
    paragraph.classList.add('bg-secondary');
    paragraph.classList.add('text-white');
    paragraph.innerText= inputField.value;
    toDoContainer.appendChild(paragraph);
    if(inputField.value){
       // const d = new Date();
       // const dataDisplayed= d.getDate() + "." + (1 + d.getMonth()) + "." + d.getFullYear();
        paragraph.appendChild(spinerss);
        //paragraph.appendChild(data);
       // data.innerText= dataDisplayed;
    }
    inputField.value='';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration='line-through';
        paragraph.removeChild(spinerss);
    });
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
        
    });
});