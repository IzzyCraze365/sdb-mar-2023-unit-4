// Unit 4 - Day 019
// Query-URL
// Passing Variables through URL

console.log("it works from page 2");

//  Splitting off from the entire URL to only grab the ? and what follows
let queryString = window.location.search;
console.log(queryString);

// Creating a new instance of URLSearchParams so we can get the value if we supply the key
let urlParams = new URLSearchParams(queryString);
// supplying the keyname to get the value
console.log(urlParams.get("firstName"));
console.log(urlParams.get("lastName"));

let orderElement = document.getElementById("order");
let qty = urlParams.get("quantity");
let product = urlParams.get("product");
console.log(`Quantity = "${qty}" & Product = "${product}"`); //! TEST
orderElement.textContent = `The order you placed was for ${qty} ${product}.`