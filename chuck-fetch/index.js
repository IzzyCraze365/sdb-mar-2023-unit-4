// Unit 4 - Day 019
// Fetching Data
// Chuck Norris Example
// https://api.chucknorris.io/ REFERENCE POINT

console.log("works from chuck fetch");

let jokes = []; //Empty Array

async function fetchJokes() {
  let url = "https://api.chucknorris.io/jokes/random";

  try {
    let response = await fetch(url);
    let data = await response.json();
    //  Console Log what you get back
    console.log(data);
    console.log(data.value);
    jokes.push(data.value);
    clearDisplay();
    displayJokes(); // This calls the Display
  } catch (error) {
    console.error(error);
  }
}

fetchJokes();

function displayJokes() {
  // This funtion will display the joke once it is called
  //copied from DOM Example, event.js (displayTodoListItems)
  jokes.forEach((joke) => {
    // references Array on line 2
    let listItem = document.createElement("li");
    listItem.textContent = joke;
    let jokeList = document.getElementById("joke-list");
    jokeList.appendChild(listItem);
  });
}

function clearDisplay() {
  // Clears List internally to Website so there is no repeat.
  let jokeList = document.getElementById("joke-list");
  while (jokeList.hasChildNodes()) {
    jokeList.removeChild(jokeList.firstChild);
  }
}

// The following function is called 'in-line' in the HTML
function deleteAllJokes() {
  // Clears List on Website so there is no repeat.
  clearDisplay();
  jokes = [];
}

/* 
// This function needs to be called
function deleteAllJokes() {
    let jokeList = document.getElementById("joke-list");
    jokeList.innerHTML = "";
    jokes = [];
  }
   */


//Created a Button
let jokeButton = document.getElementById("joke-button");
jokeButton.addEventListener("click", fetchJokes); // When clicked it fetches a new joke
