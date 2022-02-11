/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

***********************************************************************/

// your code here!

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

const arrowAvgValue = (arr) => {
  let avg;
  let sum = 0;
  arr.forEach(function (el) {
    sum += el;
  });
  avg = sum / arr.length;
  return avg;
};

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667

try {
  module.exports = arrowAvgValue;
} catch (e) {
  return undefined;
}
