// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

const commonElement = function (arrA, arrB) {
  const elem = {};

  arrA.map((num) => (elem[num] = true));

  for (let i = 0; i < arrB.length; i++) {
    if (elem[arrB[i]] === true) return arrB[i];
  }
};
