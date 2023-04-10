//  Unit 4 - Day 016
// Document Object Manager aka The DOM

// Useful resource https://www.w3schools.com/jsref/dom_obj_event.asp

console.log("it works from events");

// ? use getElementById() go fishing for the input field
// ! getElementById assumes you are looking for an ID so no # is needed
let inputItem = document.getElementById("input-item"); // fill in here
console.log(inputItem);

// ? How do I reference the value typed in the input field

// ? use the getElementById() go fishing for the button of adding the item.
let addItemBtn = document.getElementById("add-item");

// ! Adding Event Listeners

// create the variable for the element
// add a .addEventListner()
// supply a type: keydown, change, click ...
// supply a function to run when that event happens

inputItem.addEventListener("keydown", handleInputChange);

function handleInputChange() {
  console.log("detected a change");
  if (inputItem.value.length > 0) {
    addItemBtn.disabled = false;
  } else {
    addItemBtn.disabled = true;
  }
}

// ? How do you add an event listener to a button so when you click on it a fuction will run

addItemBtn.addEventListener("click", handleAdd);

let todoItemList = ["sweeping", "mopping kitchen"];

function handleAdd() {
  //   Take what the user typed in and add it to end of the array.
  todoItemList.push(inputItem.value);
  clearEntireList();
  displayTodoListItems();
  colorTodoList();
  console.log(todoItemList);
}

function displayTodoListItems() {
  // 1. Create the element you want to put on the page "li", "p", "div"
  // 2. Replace the textContent with what you would like to have displayed to user
  // 3. If needed we can assign a classname to the element
  // 4. Identify the parent tag
  // 5. AppendChild to the Parent
  todoItemList.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.className = "todo-items";
    let todoList = document.getElementById("todo-list");
    todoList.appendChild(listItem);
  });
}

function clearEntireList() {
  let todoList = document.getElementById("todo-list");
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
}

function colorTodoList() {
  let todoItems = document.getElementsByClassName("todo-items");

  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].textContent.includes("Help")) {
      todoItems[i].style.color = "green";
    } else {
      todoItems[i].style.color = "purple";
    }
  }
}

clearEntireList();
displayTodoListItems();
colorTodoList();

/* 
1. Add a new button to the HTML file to clear the list give it an ID of "clear-list"
2. In the JS file events - create an eventListner for that new button and when it is clicked supply it the clearEntireList function that has already been created.

*/

let clearListBtn = document.getElementById("clear-list");


clearListBtn.addEventListener("click", deleteEntireList);


function deleteEntireList() {
  todoItemList = [];
  clearEntireList();
  displayTodoListItems();
  }