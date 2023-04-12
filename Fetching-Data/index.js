// Unit 4 - Day 017
// Fetching Data
//API example

//Hover mouse over json and you will see "Promise" this denotes Async function, and you need an await.

console.log("it works for pokemon");
/* 
FETCH API

The Fetch is an asynchronous function

- We don't know how long it will take for the response to come back to us.

- So we must use await or we can utilize a .then()

- Wrap the fetch in a try - catch
- first variable called response
- next variable called: data, json
- use .json() after we get the response back
*/

async function fetchPokemon() {
  let url = "https://pokeapi.co/api/v2/pokemon?limit=200";

  try {
    // Basic Fetch
    let response = await fetch(url);
    let data = await response.json();
    //  Doing work on the data

    //Below is going to change for every API, suggest is to console.log the "data"
    //Then just keep stepping in until you fund what you want
    //In this case, next step was results, then we wanted ivysaur specifically - index 1, and just his name.


    let allPokemonCharacters = data.results;
    displayPokemon(allPokemonCharacters);

    console.log(data.results[1].name);
  } catch (error) {
    console.error(error);
  }
}


fetchPokemon();
/* 
The response that we get back from the API in this example is a JSON Object.

JSON = JavaScript Object Notation

*/

function displayPokemon(charactersToDisplay) {
  let pokemonDisplay = document.getElementById("display-pokemon");
  charactersToDisplay.forEach((character) => {
    console.log(character);
    let pTag = document.createElement("p");
    pTag.textContent = character.name;
    pokemonDisplay.appendChild(pTag);
  });
}
