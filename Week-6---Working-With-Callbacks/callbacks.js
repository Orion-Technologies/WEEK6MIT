// This is the array that contains numbers for you to work with
var myArray = [1, 2, 5, 6, 12, 23, 15, 31];

// This array should only contain even numbers
var evenArray = [];

// This code will call your function when the page loads up
// Don't edit this function!
window.onload = () => {
  console.log(filterArray(myArray, isEvenCallBack));
};

function filterArray(myArray, isEvenCallBack) {
  // TODO: use filterArray to determine if a number is even or odd.
  //If the number is even, add it to the array 'evenArray'
  myArray.forEach((element) => isEvenCallBack(element) ? evenArray.push(element) : null); 
  return evenArray;
}

// This function should return 'true' if a number is even and 'false' if a number is odd
let bulean;
function isEvenCallBack(number) {
  // TODO: use the mod operator (%) to determine if number is even or odd
  number % 2 == 0 ?  bulean = true : bulean = false;
  return bulean;
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { filterArray, isEvenCallBack };
}
