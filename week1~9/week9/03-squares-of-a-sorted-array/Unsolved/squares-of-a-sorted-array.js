// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

const sortedSquares = function (arr) {
  const squared = arr.map((num) => num * num);

  return squared.sort((a, b) => {
    return a - b;
  });
};
