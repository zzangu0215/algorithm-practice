// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

const arrayIntersection = function (arr1, arr2) {
  const newArr = arr1.filter((num) => arr2.includes(num));

  return newArr;
};
