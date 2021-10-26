// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

const arraySearch2D = function (arr) {
  const newArr = arr.flat();
  let count = 0;

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "X") count += 1;
  }

  return count;
};
