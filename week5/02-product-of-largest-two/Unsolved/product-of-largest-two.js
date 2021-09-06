// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

const productOfLargestTwo = function (arr) {
  const largest = Math.max(...arr);

  const newArr = arr.filter((num) => num < largest);
  const secondLargest = Math.max(...newArr);

  return largest * secondLargest;
};
