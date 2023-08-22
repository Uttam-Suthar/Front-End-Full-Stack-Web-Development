// Distinguishing map() and forEach()
// Send Feedback
// How does the map() function differ from the forEach() function in JavaScript?

// The map() function returns a new array with transformed elements, while the forEach() function returns undefined


// Solution Description
// The map() function is used for transforming values and creating a new array, while forEach() is used for performing actions on each array element.


/** JS Higher Order Functions */

//map()

const inputs = [2, 4, 6, 8, 7];

// const squaredArray = inputs.map(function (
//   currentElement
// ) {
//   return currentElement * currentElement;
// });

const squaredArray = inputs.map(
  (num) => num * num
);

console.log(squaredArray);
