//a reference to the form section
const addForm = document.querySelector(".add");
//select the ul list 
const list = document.querySelector(".todos");
// a reference to form search section
const search = document.querySelector('.search input')


//ouput the input from the addform to the ul list
function generalTemplate(todo){

  list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`

}

//listening for event on the form section 
addForm.addEventListener('submit', evt=>{
    //stops the form from refreshing when user click on enter to submit
    evt.preventDefault();
    //reference to the value inputed in the form section
    //the .trim() method removes all empty space in the form
    const todo = addForm.add.value.trim().toLowerCase();
    //console.log(todo);
    if(todo.length){
        //calling the generalTemplate function and passing todo as a parameter/arguments
        generalTemplate(todo)
        //the reset() method clears the value after clicking submitting
        addForm.reset();
    }


});


//delete Todos
// listening for click event in the ul list 
list.addEventListener('click',(evt)=>{
    //checks if the event target contains delete in it classList
    if (evt.target.classList.contains("delete")){
        evt.target.parentElement.remove();
    }
})

const filteredTodo = (userInput)=>{
    //selecting the children of the ul
    //Array.from turns the html collection into an array
    Array.from(list.children)
        .filter((todo)=>!todo.textContent.includes(userInput))
        .forEach((todo)=>todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo)=>todo.textContent.includes(userInput))
        .forEach((todo)=>todo.classList.remove('filtered'));    
}
//search todo
search.addEventListener('keyup',()=>{
    const userInput = search.value.trim().toLowerCase();
    // console.log(userInput)
    filteredTodo(userInput)
})
