//  Unit 4 - Day 016
// Document Object Manager aka The DOM

console.log("it works");

// ! getElementById()
// Search the document and once it finds a match on the HMTL page you are now "hooked" to that element to alter it.
// This will only search for ID's

let header = document.getElementById("main-header");
console.log(header); // Do NOT Hit the Play button, you have to "Inspect" the Webpage's terminal

// ? Changing Color of the Header to Red
header.style.color = "red";
// ! How do I change the text that is displayed
header.textContent = "John's Todo List";

let catagory = document.getElementById("catagory");
// ! If you want to have HTML Tags to get rendered as HTML then you will have to use innerHTML
catagory.innerHTML = "<em>Chores</em>";

// ! getElementsByClassName()
//  Method returns a collection of elements with the specified class name
let todoItems = document.getElementsByClassName("todo-items");
console.log("todoItems at position 0:", todoItems[0]);

for (let i = 0; i < todoItems.length; i++) {
  if (todoItems[i].textContent.includes("Help")) {
    todoItems[i].style.color = "green";
  } else {
    todoItems[i].style.color = "purple";
  }
}

//! getElementsByTagName()

let pTags = document.getElementsByTagName("p");
console.log("pTags:", pTags);

pTags[0].style.fontStyle = "italic"; //styles anything wrapped in a <p> tag

// ! querySelector()
// give you the first element that meets the requirements

let todoItemExample = document.querySelector(".todo-items");
console.log("Querey Selector Example", todoItemExample);

let ptagExample = document.querySelector("p");
console.log("P Tag Example", ptagExample);

let idExample = document.querySelector("#main-header");
console.log("ID Example", idExample);

// ! querySelectorAll()
// returns all the elements that match the CSS Selector
// You can do everything above, with querySelectorAll

let todoItemExample2 = document.querySelectorAll(".todo-items"); // returns in an array
console.log("Querey Selector All Example", todoItemExample2);
todoItemExample2.forEach((item) => console.log(item));

let ptagExample2 = document.querySelectorAll("p");
console.log("P Tag ALL Example", ptagExample2);

let idExample2 = document.querySelectorAll("#main-header");
console.log("ID ALL  Example", idExample2); // pointless to use on IDs, it will always be an array of 1

/* 
The Difference Between an HTMLCollection and a NodeList
A NodeList and an HTMLcollection is very much the same thing.

Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.

Both have a length property that returns the number of elements in the list (collection).

An HTMLCollection is a collection of document elements.

A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

HTMLCollection items can be accessed by their name, id, or index number.

NodeList items can only be accessed by their index number.

An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

The querySelectorAll() method returns a static NodeList.

The childNodes property returns a live NodeList.

*/
