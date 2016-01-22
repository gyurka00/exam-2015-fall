'use strict';

// Write a function that takes an array of numbers,
// and returns a new array with the same length but all,
// of it's elements are the triple of the original array's elements!
function tripleEachElement(array) {
  var output = [];
  array.forEach(function(e) {
    output.push(3 * e);
  });
  return output;
}






console.log(tripleEachElement([4, 6, 3, 2])); // [12, 18, 9, 6]
