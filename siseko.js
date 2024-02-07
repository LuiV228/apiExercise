// Shuffle an Array:
// shuffles the elements of an array randomly.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let array = [1, 2, 3, 4, 5];
// console.log(shuffleArray(array));


// Flatten an Array:
// takes a nested array and flattens it into a single array.
function flattenArray(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

let nestedArray = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(nestedArray));


// Find Unique Values in an Array:
// finds unique values in an array using the Set object.
function findUniqueValues(arr) {
  return [...new Set(arr)];
}
let arr = [1, 2, 3, 1, 2, 4, 5];
// console.log(findUniqueValues(array)); 