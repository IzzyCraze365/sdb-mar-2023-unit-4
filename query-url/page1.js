// Unit 4 - Day 019
// Query-URL
// Passing Variables through URL

console.log("it works from page1");

// TODO: create a function for the button click
// TODO: create a URL that will be used to move to page2
// TODO: grab the values from the input fields build out the new url

let orderButton = document.getElementById("order-btn");

orderButton.addEventListener("click", goToNextPage);

function goToNextPage() {
  //   console.log("function works");
  let product = document.getElementById("product");
  let quantity = document.getElementById("quantity");

  window.location.href = `./page2.html?firstName=Rob&lastName=Vanarsdall&product=${product.value}&quantity=${quantity.value}`; //! This is key to transfering variables!!!
}
