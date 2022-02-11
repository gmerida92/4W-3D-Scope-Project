/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

***********************************************************************/

// your code here

let arrowMirrorArray = (arr) => {
  let newArr = [];
  let clone = arr.slice();
  //console.log(clone);
  arr.forEach(function (el) {
    // let shift = clone.unshift(el);
    // console.log(shift);
    //let rev = arr.reverse();
    //console.log(rev);
    newArr.unshift(el);
  });
  return clone.concat(newArr);
};
console.log(arrowMirrorArray([1, 2, 3])); // => [ 1, 2, 3, 3, 2, 1 ]

// arrowMirrorArray([1, 2, 3]); // => [ 1, 2, 3, 3, 2, 1 ]
// arrowMirrorArray(["a", "b", "c", "d"]); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  return null;
}
