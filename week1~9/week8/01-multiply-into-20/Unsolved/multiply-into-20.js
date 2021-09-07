// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return false

const multiplyInto20 = function (arr) {
  const temp = arr.filter((num) => 20 % num === 0 && num > 0);

  if (temp.length >= 2) return true;
  else return false;
};
